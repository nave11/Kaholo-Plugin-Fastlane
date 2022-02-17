const { spawn } = require('child_process');
 
async function listWorkingDir(action, settings){
	var WorkDir = settings.workingDir + "/" + settings.repoName +"/" + settings.projectName;
	var path = action.params.PATH; 
	var param1 = action.params.PARAMETERS; 
	const child = spawn('ls', [param1, path], {
		cwd: WorkDir
	  });

	  child.stdout.on('data', (data) => {
		console.log(`stdout:\n${data}`);
	  });
	  
	  child.stderr.on('data', (data) => {
		console.error(`stderr: ${data}`);
	  });
	  
	  child.on('error', (error) => {
		console.error(`error: ${error.message}`);
	  });
	  
	  child.on('close', (code) => {
		console.log(`child process exited with code ${code}`);
	  });
	  }








module.exports = {
	//buildJob : buildJob
	listWorkingDir : listWorkingDir
}
