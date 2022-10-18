const fs = require('fs');
const path = require('path');
let testObg = []


function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath, {withFileTypes: true}).forEach(function (dirent) {
    var filePath = path.join(currentDirPath, dirent.name);
    if (dirent.isFile()) {
      callback(filePath, dirent);
    } else if (dirent.isDirectory()) {
      testObg.push({
        name: dirent.name,
        items: []
      })
      walkSync(filePath, callback);
    }
  });
}

let allIcons = []
walkSync('../src/svg', function (filePath, stat) {
  const iconItem = filePath.replace('../src/svg/', '').split('/')
  testObg.forEach((item) => {
    if (item.name === iconItem[0]) {
      item.items.push(iconItem[1].replace('.svg', ''))
    }
  })
  allIcons.push(filePath)
});

const data = `
const AllIcons =${JSON.stringify(testObg)}
export default AllIcons
`
fs.writeFile('../src/icons/AllIcons.tsx',data , function (err) {
  if (err) {res.status(500).send('Server is error...')}
})
