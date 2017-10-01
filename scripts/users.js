// Description:
//   show user data

// Commands:
//   user <name> - shows user data
//

// Notes
//

// Author
//   @cvicuna

'use strict';

module.exports = (robot) => {

/*   const getUsernameById = function(id){
    const name;
    if(id != null){
        const users = robot.brain.users();
        Object.keys(users).forEach(k => {
            if(id == users[k].id){
                return users[k].name;
            }
        });
    }
  } */

  robot.respond(/user(.*)/i, (msg) => {
    const name = msg.match[1].split(' ')[1];
    const users = robot.brain.users();
    if(name != null){
        let tempName;
        Object.keys(users).forEach(k => {
            let tempName = users[k].slack.profile.display_name;
            let tipo = typeof(tempName);
            msg.send(`user: ${nameId} - tipo: ${tipo}`);
            if(name == tempName){
                let nameId = users[k].id;
                msg.send(`tu id es: ${nameId}`);
            }
        });
    }
  });
};