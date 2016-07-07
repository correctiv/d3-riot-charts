<raw-html>
  this.updateContent = () => {
    this.root.innerHTML = this.opts.content
  }

  this.on('update', () => {
    this.updateContent()
  })

  this.updateContent()
</raw-html>
