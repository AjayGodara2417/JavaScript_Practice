// Exercises:Level 3
const countries = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://restcountries.eu/data/ala.svg',
      currency: 'Euro'
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      languages: ['Albanian'],
      population: 2886026,
      flag: 'https://restcountries.eu/data/alb.svg',
      currency: 'Albanian lek'
    },
    {
      name: 'Algeria',
      capital: 'Algiers',
      languages: ['Arabic'],
      population: 40400000,
      flag: 'https://restcountries.eu/data/dza.svg',
      currency: 'Algerian dinar'
    },
    {
      name: 'American Samoa',
      capital: 'Pago Pago',
      languages: ['English', 'Samoan'],
      population: 57100,
      flag: 'https://restcountries.eu/data/asm.svg',
      currency: 'United State Dollar'
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      languages: ['Catalan'],
      population: 78014,
      flag: 'https://restcountries.eu/data/and.svg',
      currency: 'Euro'
    },
    {
      name: 'Angola',
      capital: 'Luanda',
      languages: ['Portuguese'],
      population: 25868000,
      flag: 'https://restcountries.eu/data/ago.svg',
      currency: 'Angolan kwanza'
    },
    {
      name: 'Anguilla',
      capital: 'The Valley',
      languages: ['English'],
      population: 13452,
      flag: 'https://restcountries.eu/data/aia.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Antarctica',
      capital: '',
      languages: ['English', 'Russian'],
      population: 1000,
      flag: 'https://restcountries.eu/data/ata.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Antigua and Barbuda',
      capital: "Saint John's",
      languages: ['English'],
      population: 86295,
      flag: 'https://restcountries.eu/data/atg.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Argentina',
      capital: 'Buenos Aires',
      languages: ['Spanish', 'Guaraní'],
      population: 43590400,
      flag: 'https://restcountries.eu/data/arg.svg',
      currency: 'Argentine peso'
    },
    {
      name: 'Armenia',
      capital: 'Yerevan',
      languages: ['Armenian', 'Russian'],
      population: 2994400,
      flag: 'https://restcountries.eu/data/arm.svg',
      currency: 'Armenian dram'
    },
    {
      name: 'Aruba',
      capital: 'Oranjestad',
      languages: ['Dutch', '(Eastern) Punjabi'],
      population: 107394,
      flag: 'https://restcountries.eu/data/abw.svg',
      currency: 'Aruban florin'
    },
    {
      name: 'Australia',
      capital: 'Canberra',
      languages: ['English'],
      population: 24117360,
      flag: 'https://restcountries.eu/data/aus.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Austria',
      capital: 'Vienna',
      languages: ['German'],
      population: 8725931,
      flag: 'https://restcountries.eu/data/aut.svg',
      currency: 'Euro'
    },
    {
      name: 'Azerbaijan',
      capital: 'Baku',
      languages: ['Azerbaijani'],
      population: 9730500,
      flag: 'https://restcountries.eu/data/aze.svg',
      currency: 'Azerbaijani manat'
    },
    {
      name: 'Bahamas',
      capital: 'Nassau',
      languages: ['English'],
      population: 378040,
      flag: 'https://restcountries.eu/data/bhs.svg',
      currency: 'Bahamian dollar'
    },
    {
      name: 'Bahrain',
      capital: 'Manama',
      languages: ['Arabic'],
      population: 1404900,
      flag: 'https://restcountries.eu/data/bhr.svg',
      currency: 'Bahraini dinar'
    },
    {
      name: 'Bangladesh',
      capital: 'Dhaka',
      languages: ['Bengali'],
      population: 161006790,
      flag: 'https://restcountries.eu/data/bgd.svg',
      currency: 'Bangladeshi taka'
    },
    {
      name: 'Barbados',
      capital: 'Bridgetown',
      languages: ['English'],
      population: 285000,
      flag: 'https://restcountries.eu/data/brb.svg',
      currency: 'Barbadian dollar'
    },
    {
      name: 'Belarus',
      capital: 'Minsk',
      languages: ['Belarusian', 'Russian'],
      population: 9498700,
      flag: 'https://restcountries.eu/data/blr.svg',
      currency: 'New Belarusian ruble'
    },
    {
      name: 'Belgium',
      capital: 'Brussels',
      languages: ['Dutch', 'French', 'German'],
      population: 11319511,
      flag: 'https://restcountries.eu/data/bel.svg',
      currency: 'Euro'
    },
    {
      name: 'Belize',
      capital: 'Belmopan',
      languages: ['English', 'Spanish'],
      population: 370300,
      flag: 'https://restcountries.eu/data/blz.svg',
      currency: 'Belize dollar'
    },
    {
      name: 'Benin',
      capital: 'Porto-Novo',
      languages: ['French'],
      population: 10653654,
      flag: 'https://restcountries.eu/data/ben.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Bermuda',
      capital: 'Hamilton',
      languages: ['English'],
      population: 61954,
      flag: 'https://restcountries.eu/data/bmu.svg',
      currency: 'Bermudian dollar'
    },
    {
      name: 'Bhutan',
      capital: 'Thimphu',
      languages: ['Dzongkha'],
      population: 775620,
      flag: 'https://restcountries.eu/data/btn.svg',
      currency: 'Bhutanese ngultrum'
    },
    {
      name: 'Bolivia (Plurinational State of)',
      capital: 'Sucre',
      languages: ['Spanish', 'Aymara', 'Quechua'],
      population: 10985059,
      flag: 'https://restcountries.eu/data/bol.svg',
      currency: 'Bolivian boliviano'
    },
    {
      name: 'Bonaire, Sint Eustatius and Saba',
      capital: 'Kralendijk',
      languages: ['Dutch'],
      population: 17408,
      flag: 'https://restcountries.eu/data/bes.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Bosnia and Herzegovina',
      capital: 'Sarajevo',
      languages: ['Bosnian', 'Croatian', 'Serbian'],
      population: 3531159,
      flag: 'https://restcountries.eu/data/bih.svg',
      currency: 'Bosnia and Herzegovina convertible mark'
    },
    {
      name: 'Botswana',
      capital: 'Gaborone',
      languages: ['English', 'Tswana'],
      population: 2141206,
      flag: 'https://restcountries.eu/data/bwa.svg',
      currency: 'Botswana pula'
    },
    {
      name: 'Bouvet Island',
      capital: '',
      languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
      population: 0,
      flag: 'https://restcountries.eu/data/bvt.svg',
      currency: 'Norwegian krone'
    },
    {
      name: 'Brazil',
      capital: 'Brasília',
      languages: ['Portuguese'],
      population: 206135893,
      flag: 'https://restcountries.eu/data/bra.svg',
      currency: 'Brazilian real'
    },
    {
      name: 'British Indian Ocean Territory',
      capital: 'Diego Garcia',
      languages: ['English'],
      population: 3000,
      flag: 'https://restcountries.eu/data/iot.svg',
      currency: 'United States dollar'
    },
    {
      name: 'United States Minor Outlying Islands',
      capital: '',
      languages: ['English'],
      population: 300,
      flag: 'https://restcountries.eu/data/umi.svg',
      currency: 'United States Dollar'
    },
    {
      name: 'Virgin Islands (British)',
      capital: 'Road Town',
      languages: ['English'],
      population: 28514,
      flag: 'https://restcountries.eu/data/vgb.svg',
      currency: '[D]'
    },
    {
      name: 'Virgin Islands (U.S.)',
      capital: 'Charlotte Amalie',
      languages: ['English'],
      population: 114743,
      flag: 'https://restcountries.eu/data/vir.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Brunei Darussalam',
      capital: 'Bandar Seri Begawan',
      languages: ['Malay'],
      population: 411900,
      flag: 'https://restcountries.eu/data/brn.svg',
      currency: 'Brunei dollar'
    },
    {
      name: 'Bulgaria',
      capital: 'Sofia',
      languages: ['Bulgarian'],
      population: 7153784,
      flag: 'https://restcountries.eu/data/bgr.svg',
      currency: 'Bulgarian lev'
    },
    {
      name: 'Burkina Faso',
      capital: 'Ouagadougou',
      languages: ['French', 'Fula'],
      population: 19034397,
      flag: 'https://restcountries.eu/data/bfa.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Burundi',
      capital: 'Bujumbura',
      languages: ['French', 'Kirundi'],
      population: 10114505,
      flag: 'https://restcountries.eu/data/bdi.svg',
      currency: 'Burundian franc'
    },
    {
      name: 'Cambodia',
      capital: 'Phnom Penh',
      languages: ['Khmer'],
      population: 15626444,
      flag: 'https://restcountries.eu/data/khm.svg',
      currency: 'Cambodian riel'
    },
    {
      name: 'Cameroon',
      capital: 'Yaoundé',
      languages: ['English', 'French'],
      population: 22709892,
      flag: 'https://restcountries.eu/data/cmr.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Canada',
      capital: 'Ottawa',
      languages: ['English', 'French'],
      population: 36155487,
      flag: 'https://restcountries.eu/data/can.svg',
      currency: 'Canadian dollar'
    },
    {
      name: 'Cabo Verde',
      capital: 'Praia',
      languages: ['Portuguese'],
      population: 531239,
      flag: 'https://restcountries.eu/data/cpv.svg',
      currency: 'Cape Verdean escudo'
    },];
    
// How many languages are there in the countries object file.
const allLanguages = countries.flatMap(country => country.languages);
console.log(allLanguages)
const uniqueLanguages = new Set(allLanguages);
console.log(`There are ${uniqueLanguages.size} unique languages.`);

// let lan = [];
// for (obj of countries) {
//     let x = obj.languages.length;
//     for(let i=0; i<x; i++){
//         newlan = obj.languages
//         lan.push(newlan)
//     }
// }
// // console.log(lan)
// let lang = new Set(lan);
// console.log(lang)
// let lang = new Set();

// *** Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(countries, topN) {
    const languageCount = new Map();

    countries.forEach(country => {
        country.languages.forEach(language => {
            languageCount.set(language, (languageCount.get(language) || 0) + 1);
        });
    });

    return Array.from(languageCount.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, topN)
        .map(([language, count]) => ({ [language]: count }));
}

console.log(mostSpokenLanguages(countries, 10));
// console.log(mostSpokenLanguages(countries, 3));