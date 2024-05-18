import cluster from "cluster";
import readline from "readline";
if ( cluster.isPrimary )
{
    process.on( 'SIGINT', () =>
    {
        const rl = readline.createInterface( process.stdin, process.stdout );
        rl.question( `Type {process.pid} to kill the process\n`, ( answer ) =>
        {
            if ( answer === process.pid.toString() )
            {
                process.exit( 0 );
            }
        } );
    } );
}
