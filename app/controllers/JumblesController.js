import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { jumblesService } from "../services/JumblesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class JumblesController {
  constructor() {
    console.log('loaded');
    AppState.on('activeJumble', this.drawActiveJumble)
    AppState.on('jumbles', this.drawJumbles)
    this.drawActiveJumble
    jumblesService.loadJumbles()
  }

  drawActiveJumble() {
    if (AppState.activeJumble == null) {
      setHTML('jumble-game', Jumble.placeHolderHTMLTemplate)
    }
    else {
      setHTML('jumble-game', AppState.activeJumble.gameHTMLTemplate)
      document.getElementById('jumble-game-input').focus()
    }
  }

  drawJumbles() {
    const jumbles = AppState.jumbles
    let jumblesHTML = ''
    jumbles.forEach(jumbles => jumblesHTML += jumbles.listHTMLTemplate)
    setHTML('jumbles-list', jumblesHTML)
  }

  /**
   * @param {string} jumbleID 
   */
  setActiveJumble(jumbleID) {
    jumblesService.setActiveJumble(jumbleID)
  }

  checkJumbleInput() {
    event.preventDefault()
    const formElm = event.target
    const jumbleText = formElm.jumbleGameBody.value
    jumblesService.checkJumbleInput(jumbleText)
  }

  createJumble() {
    event.preventDefault()
    const formElm = event.target
    const jumbleData = getFormData(formElm)
    jumblesService.createJumble(jumbleData)
    formElm.reset()
  }
}