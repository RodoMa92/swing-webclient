import { loggedInUserIsAdmin } from '../utils'

import { SettingCategory } from '@/interfaces/settings'
import AvatarSvg from '@/assets/icons/phone.svg?raw'
import { SettingType } from '../enums'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

export default <SettingCategory>{
    groups: [
        {
            title: t("Settings.Pairing.Title"),
            icon: AvatarSvg,
            settings: [
                {
                    type: SettingType.pairing,
                },
            ],
        },
    ],
}
