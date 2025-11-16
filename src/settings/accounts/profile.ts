import { SettingCategory } from '@/interfaces/settings'
import { SettingType } from '../enums'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

export default <SettingCategory>{
    groups: [
        {
            title: t('Settings.Profile.Title'),
            settings: [
                {
                    type: SettingType.profile,
                },
            ],
        },
    ],
}
