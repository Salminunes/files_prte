import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
    host: string;
}

console.log('arquivo database');

getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = 'database_ignite'; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
    createConnection({
        ...options,
    });
});
