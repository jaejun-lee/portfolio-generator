const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
    // for (let i = 0; i < profileDataArr.length; i++) {
    //     console.log(profileDataArr[i])
    // }
    profileDataArr.forEach((e) => {console.log(e);}); 
  };
  
  printProfileData(profileDataArgs);