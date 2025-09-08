import { createI18n } from 'vue-i18n'

import en from './en.json'
import fr from './fr.json'
import ar from './ar.json'
import es from './es.json'
import de from './de.json'
import it from './it.json'
import pt from './pt.json'
import ru from './ru.json'
import zh from './zh.json'
import ja from './ja.json'
import ko from './ko.json'
import nl from './nl.json'
import sv from './sv.json'
import no from './no.json'
import da from './da.json'
import fi from './fi.json'
import pl from './pl.json'
import tr from './tr.json'
import id from './id.json'
import ms from './ms.json'

// 
const messages = {
  en, fr, ar, es, de, it, pt, ru, zh, ja, ko, nl, sv, no, da, fi, pl, tr, id, ms
}

const i18n = createI18n({
  locale: 'en', 
  fallbackLocale: 'en', 
  messages
})

export default i18n
