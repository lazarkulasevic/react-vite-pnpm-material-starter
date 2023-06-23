module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What should we name this page?'
      }
    ]
    return inquirer.prompt(questions).then((answers) => {
      return { name: answers.name }
    })
  }
}
