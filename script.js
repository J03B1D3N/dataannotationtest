const fs = require('fs');

function decode(message_file) {

fs.readFile('./' + message_file, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

const splitString = data.split('\n')

const keyValuePairs = {}
splitString.map(string => {
    const numberAndWord = string.split(' ')
    if(numberAndWord[0] && numberAndWord[1]) {
        keyValuePairs[numberAndWord[0]] = numberAndWord[1]
    }
})

const keys = Object.keys(keyValuePairs)

function groupArray(inputArray) {
    const outputArray = [];
    let count = 1;
  
    for (let i = 0; i < inputArray.length; count++) {
      outputArray.push(inputArray.slice(i, i + count));
      i += count;
    }
  
    return outputArray;
}
  const pyramid = groupArray(keys)

  let decodedMessage = ''
    
  for(let i = 0; i < pyramid.length; i++) {
    decodedMessage += keyValuePairs[pyramid[i][i]] + " "
  }

  console.log(decodedMessage)
}); 


}

decode('task.txt')

            //                 1
            //             2       3
            //         4       5       6
            //     7       8       9       10
            // 11      12      13      14      15
