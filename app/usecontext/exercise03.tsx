/*
3. Language / i18n Context

Create a LanguageContext:

language ('en', 'fr')
setLanguage()

Tasks:

Show text in English/French
Add a toggle button

Example:

"Hello" → "Bonjour"

👉 Bonus: You already use i18n → simulate your own mini version
*/

import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LanguageContext, LanguageProvider } from "./context/LanguageContext";

export default function Exercise03() {
    return (
        <LanguageProvider>
            <Exercise03Content />
        </LanguageProvider>
    )
}

function Exercise03Content() {
    return (
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 15, justifyContent: 'space-evenly' }}>
            <Card1 />
            <Card2 />
            <Card3 />
        </View>
    )
}

function Card1() {
    const { language } = useContext(LanguageContext);
    const i18n = useI18n(language);

    return (
        <View style={{ width: 300, height: 100, borderWidth: 1, borderColor: 'blue', borderRadius: 5, padding: 15, justifyContent: 'space-around' }}>
            <Text>{i18n.t('name') + ': ' + 'Gustavo'}</Text>
            <Text>{i18n.t('email') + ': ' + 'ghcaixeta@gmail.com'}</Text>
        </View>
    )
}

function Card2() {
    const { language } = useContext(LanguageContext);
    const i18n = useI18n(language);

    return (
        <View style={{ width: 300, height: 100, borderWidth: 1, borderColor: 'green', borderRadius: 5, padding: 15, justifyContent: 'space-around' }}>
            <Text>{i18n.t('city') + ': ' + 'Montreal'}</Text>
            <Text>{i18n.t('country') + ': ' + 'Canada'}</Text>
            <Text>{i18n.t('test') + ': ' + 'Test'}</Text>
        </View>
    )
}

function Card3() {
    const { setLanguage } = useContext(LanguageContext);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 300, height: 100, borderWidth: 1, borderColor: 'red', borderRadius: 5 }}>
            <TouchableOpacity style={{ width: 100, height: 50, borderRadius: 5, backgroundColor: '#12867c', justifyContent: 'center', alignItems: 'center' }} onPress={() => setLanguage('en')}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 100, height: 50, borderRadius: 5, backgroundColor: '#12867c', justifyContent: 'center', alignItems: 'center' }} onPress={() => setLanguage('fr')}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Français</Text>
            </TouchableOpacity>
        </View>
    )
}

function useI18n(lang: string) {
    const dic = {
        en: {
            name: 'Name',
            email: 'Email',
            city: 'City',
            country: 'Country'
        },

        fr: {
            name: 'Prénom',
            email: 'Courriel',
            city: 'Ville',
            country: 'Pays'
        }
    } as Record<string, any>

    function t(key: string) {
        return dic[lang][key] ?? `[missing translation: ${lang}.${key}]`
    }

    return {
        t,
        currentLanguage: lang
    }
}