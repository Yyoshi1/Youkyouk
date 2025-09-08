import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    dashboard: 'Dashboard',
    projects: 'Projects',
    tasks: 'Tasks',
    teams: 'Teams',
    users: 'Users',
    reports: 'Reports',
    settings: 'Settings'
  },
  fr: {
    dashboard: 'Tableau de bord',
    projects: 'Projets',
    tasks: 'Tâches',
    teams: 'Équipes',
    users: 'Utilisateurs',
    reports: 'Rapports',
    settings: 'Paramètres'
  },
  ar: {
    dashboard: 'لوحة التحكم',
    projects: 'المشاريع',
    tasks: 'المهام',
    teams: 'الفرق',
    users: 'المستخدمون',
    reports: 'التقارير',
    settings: 'الإعدادات'
  }
  // يمكن إضافة أكثر من 20 لغة بنفس الشكل
}

const i18n = createI18n({
  locale: 'en', // الافتراضية
  fallbackLocale: 'en',
  messages
})

export default i18n
