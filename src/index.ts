import os from 'os';

console.log(process.env.PORT)
console.log(`Arch: ${os.arch()}`);
console.log(`Cpus: ${JSON.stringify(os.cpus(), null, 2)}`);
console.log(`Total memory: ${os.totalmem()}`);
console.log(`Free memory in mb: ${os.freemem() / 1024}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Available parallelism: ${os.availableParallelism()}`);
console.log(`Machine: ${os.machine()}`);
console.log(`OS: ${os.type()}`);
console.log(`Version: ${os.version()}`);
console.log(`Release: ${os.release()}`);