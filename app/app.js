let cmd = process.argv[1];
console.log(process.argv);
console.log(`cmd: ${cmd}`);
switch(cmd){
    case 'git':
        require('./git')();
        console.log('execute git cmd!');
        break;
    case 'ext':
        console.log('execute ext cmd!');
        break;
}