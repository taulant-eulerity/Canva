export const handleNavigation = (event, AObject) => {
    const activeObject = AObject ? AObject : event?.target
    switch(activeObject?.type) {
      case 'textbox': return 'textbox'
      case 'image': return 'image'
      case 'group': return 'group'
      case 'activeSelection': return 'activeSelection'
      default: return 'canvas'
    }
  }