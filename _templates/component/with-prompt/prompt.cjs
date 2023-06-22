module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?'
      }
    ]
    return inquirer.prompt(questions).then((answers) => {
      return { name: answers.name }
    })
  }
}
