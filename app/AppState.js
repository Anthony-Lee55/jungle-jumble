import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Jumble } from './models/Jumble.js'

class ObservableAppState extends EventEmitter {


  /** @type {Jumble[]} */
  jumbles = [
    new Jumble({ name: '🎃 Jumble', body: "Raging roosters rapidly ruffle red feathers, racing 'round the rusty roost." }),
    new Jumble({ name: '👻 Jumble', body: "Ten tiny turkeys tiptoe tenaciously through tall tangly thickets." }),
    new Jumble({ name: '🦃 Jumble', body: "Polly the parrot proudly prattles playful, puzzling phrases." })
  ]

  /**@type {Jumble} */
  activeJumble = null
}

export const AppState = createObservableProxy(new ObservableAppState())