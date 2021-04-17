const functions = require('firebase-functions')
const admin = require('firebase-admin')
const Filter = require('bad-words')


const badWords = "orto-bulto-cajeta-choto-coger-concha-cuca-culo-forro-hoyo-mierda-ocote-ojete-ortiva-pelotas-pelotudo-pete-pijotero-pingo-puta-putas-puto-rata-tragasable-chupapija-indio-tara-lary-chota-birlocha-chola-imilla-llokalla-negro-guarayo-cunumi-kara-maricon-gay-trolo-lechuguin-travesti-loca-hijo de puta-malparido-hijo de la gran flauta-bastardo-pollerudo-camba-prostituta-ramera-carnicero-camionero-payaso-petizo-nojo-retrasado-mongolico-gil-baboso-imbecil-estupido-bestia-burro-asno-buey-nabo-trancado-nazi-luser-nono-porqueria-pucha-poto-bostero-gallina-cuervo-quemero-tatengue-tripero-pincharrata-leproso-canalla-colla-agacharsele el pico-andar con la piedra o roca-boton de cuero-la penca del burro-remojar el cochayuyo-agueonao-tonto-ridiculo-conchetumadre-cochesumadre-conchesumare-reconchetumadre-recochesumadre-reconchesumare-hueon-mamon-ahuevonado-ahueonao-aweonao-huevada-hueveo-culeado-culeao-culiao-choro-pico-raja-hijo de la perra-chupame la raja-traga sable-maraco-pene-verga-olluo-culia-pajaron-cacorra-ahuevado-ano-arrecha-arrecho-bobo-bochinche-boleta-boletoso-bombril-cachon-cacorro-caido del zarzo-care chimba-care monda-caremonda-careverga-chimbo-chocha-chocho-chuchesumadre-chunchurria-chupelo-coma mierda-cule-culear-culiar-delputas-doble hijueputa-doblehijueputa-fariseo-follar-garbimba-gonorrea-gorrero-gran doble hijueputa-grantriplehijueputa-guiso-gurrupleta-gurrupleto-hijueputa-hipocrita-huevon-huevona-huevonada-jartera-jueputa-lameculo-lampara-lamparoso-lichigo-loba-malparida-mamelo-mamera-marica-masturbacion-masturbarse-nera-nero-pendejo-perro-pichurria-pija-pinche-piroba-pirobo-polla-pordiosero-pullon-sapa-sapo-sapo hijueputa-su madre-tetas-tirar-tontarron-triplehijueputa-zorra-zunga-monda-cara de pepa-care pepa-chupeme la picha-come huevo-playo-me cago en su madre-mico-nica-idiota-analfabeto-ingnorante-pedofilo-asqueroso-mama picha-care gorro-chupe verga-aguevado-aguevao-panocha-carebarro-puchica-carepi-caretiesto-culantro-canazo-guevazo-vale picha-cagona-cuite-blandito-bofe-bollo-cabron-cabeciduro-cherna-chulo-churre-chusma-cojones-comemierda-cucaracha-descarao-flete-fletera-ganso-jinetera-mala hoja-mandao-manuela-morronga-paja-pajaro-pajuso-pato-pinga-sanaco-timbal-tortillera-verraco-zurdo-picador-tirador-mecaniquito-inflador-bolsa-adulador-arrechera-buena mierda-chinga su madre-conazo-cresta-hijo de la gran puta-lambon-maldita rata-mama culo-mama huevo-sieso-chuta-chucha-gaver-hijuefruta-concha de tu madre-cara de cojudo-badulaque-berzotas-bodoque-calabaza-cenutrio-ceporro-coprofago-charran-chorra-chupoptero-disoluto-energumeno-esbirro-escolimoso-esputo-estolido-serrano-serrana-boba-abanto-a tomar por culo-abrazafarolas-adufe-alcornoque-alfenique-andurriasmo-arrastracueros-artaban-atarre-barrabas-barriobajero-bebecharcos-bellaco-belloto-besugo-bobalicon-bocabuzon-bocachancla-bocallanta-boquimuelle-borrico-botarate-brasas-bucefalo-cabestro-cabezaalberca-cabezabuque-cachibache-cafre-cagalindes-cagarruta-cagarse-cago-calambuco-calamidad-calduo-calientahielos-calzamonas-cansalmas-cantamananas-capullo-caracaballo-caracarton-caraculo-caraflema-carajaula-carajote-carapapa-carapijo-cargar-cazurro-cebollino-cenizo-cernicalo-chiquilicuatre-chirimbaina-chupacables-chupasangre-cierrabares-cipote-cojonudo-comebolsas-comechapas-comeflores-comestacas-conaso-cono-cretino-cuerpoescombro-culopollo-dar por culo-descerebrado-desgarracalzas-dondiego-donnadie-echacantos-ejarramantas-esbaratabailes-escornacabras-estulto-facineroso-fanfosquero-fantoche-filimincias-foligoso-follada-folle-follen-follona-fulastre-ganan-ganapan-ganapio-gandul-gaznapiro-gilipollas-gilipuertas-giraesquinas-gorrino-gorrumino-guitarro-gurriato-habahela-hostia-huelegateras-joder-joputa-lamecharcos-lameculos-lameplatos-lechuguino-lerdo-malfollao-mamacallos-meapilas-morlaco-moromierda-ostia-pagafantas-peinabombillas-perroflauta-petimetre-tocapelotas-a la verga-cerote-chimar-cho-cho de la gran puta-hueco-maje-mula-no sirves pa ni mierda-pisa huevos-animal-basura-cabeza de verga-cara de mierda-cara de pija-cara de verga-chingona-come mierda-culero-me pelas la pija-me vale verga-no jodas-pedazo de mierda-penco-perra-pisa-pisa ninas-sabolo-tarado-topar-tu madre-zorro-amarrete-bufa-bufo-cabrona-chinga-chingada-chingadera-chingado-chingando-chingar-chingo-chingoneria-desorejada-desorejado-enganapichanga-felon-felona-granizo-hominicaca-hominicaco-incrospido-jalla-jallo-joto-ladilla-llamon-llamona-metomentodo-neja-nejo-pendeja-pitillo-poluta-poluto-querrequerre-repipi-sebuda-sebudo-tiuque-uyuyuy-venatica-venatico-vete a la chingada-xonga-xongo-yoyo-zoquete-zorimba-zorimbo-andrajoso-babieca-balin-banano-caca-canuto-cochon-codo-cuita-currutaca-cursalera-churri-dundo-espundia-federico-feyuco-freson-furby-garrote-gatorade-guebon-guevon-hoyuda-jambeco-jaime-jugado de cegua-lelo-llaga-maduro-mierdozo-mierdoza-moclin-mongolo-noneco-pasmado-pencon-care picha-picha-care pija-pirinola-plasta-putona-purruja-ridi-taraila-zorritone-awevado-puta madre-hijoeputa-care verga-care pinga-chucha e culo-reputisima-reputa-recontraputa-facilota-zorrupia-webon-aculillao-mariquita-mariflor-tutifruto-mariconzon-cuecon-cueco-locota-mota-micha-michita-chuchita-cueca-menso-boboleto-bobolicon-webonauta-plaga-racamofin-hijo de perra-hijueperra-hijuelaverga-caraepeo-caraenalga-marperio-conchatumare-cagon de mierda-carajo-cabro-wueon-sonzo-mongol-cojudo-tarao-atorrante-me llegas al pincho-desahuevate-rosquete-pastrulo-pastelero-drogo-fumon-fumeque-marihuanero-chupapinga-mostro-careperro-caremuerto-cachudo-venado-terruco-arepa-atrevido-boyo-cafe en las bolas-cagarte-capotiar-chicha-chichar-collera-cuero-culiabierto-forro de caballo-fundillo-gamberra-huele vicho-huevo-lambetuerca-lambevicho-lengua en el estuche-mama vicho-mamada pbc-mamao-mamavicho-maseta-metelo-mica-papaya-pichon de cabron-pullar-puneta-rozar las pelotas-si como ronca duerma-sin cojones-socabron-somamao-sopendejo-toto-tragaleche-tranca-vicho-de balde-tavy-boludo-gorron-arrimado-bochinchudo-cacaso-pipian-atontado-puya-tunco-abombado-bultuntun-carcunda-catacaldos-chisgarabis-craputoso-lechugino-manguarrian-mercachifle-verriondo-zascandil-zurumbatico-la concha de la lora-golpe de ala-mal aliento-pie de atleta-babieco-boca abierta-bola-bolas-cabeza de machete-cabeza de ponque-cabeza de guevo-cabilla-cachapera-cachorro-cagalitroso-cagapalo-cagar-cagarla-cagon-caliche-calienta guevo-caligueva-cana-cangrejera-capot de volkswagen-cara de tabla-cara e feto-caraja-carne con papas-carteluo-cebillo-cebilluo-ceguegue-chavista-chola e burro-chupa culo-cochina-cocolla-coje culo-cojeculo-cojer-cojio-cojonera-come chicle-come moco-comegato-conaza-confianza de perro-conito-cono de tu pepa-cono de madre-covero-coviao-cuaima-cuatriboliao-cuchara-culebra-culillo-culilluo-curda-curdo-da asco-de pinga-desgraciada-desgraciado-enchavar-erg-erga-escualido-flojo-garrancha-garrancho-geva-gocho-gran puta-guate-gueleguele-guevona-hala bola-hija de puta-hijaeputa-hijo de las siete leches-hijo de diablo-huele huele-jala bola-jeva-kilua-ladillaa-ladillao-lambusia-loco de mierda-macaco-macana-machete-macheterico-maestro parcha-magapa-majunche-mal cogida-malagente-malandra-malandro-maldicienta-maldiciento-maldita-mallen-malparia-malpario-mamador de paloma,-mamagueva-mamagueveteo-mamaguevo-mamarracha-mamarracho-marico-marico preso-marico triste-matosurrero-meason-menopausica-microondas-mio-moco-moja’ el picure-mojonero-moquito-muerdealmohada-muergana-muergano-nengue-niche-nojoda-nona-pacharro-paco-pacucuso-pacufo-pacuso-pacusobo-paga peo-paga prote-pajizo-pajua-pajuo-palo-paloma-panal caga’o-pandorga-papo-parcha-parchita-pargo-pargula-parido por el sobaco-pata e’ rolo-patear el tobo-pea-pecuso-pegoste de olla-pelele-peo-pepa del culo-pepita-perillaoriental-perro e’ quinta-perro e’ rancho-pezcao-pichicosa-pichinga-piripicho-plegocha-pocha-polvo del gallo-polvo del kerosene-porton de iglesia-primo-pupu-queso-quesua-quesuo-rajunarepa-ratica-realengo-recontra cono’e madre-recontraconisimo-redoblona-relambe guevo-relambechupaverga-relambepipe-rodaja de pina-rolitranco-rosalada-ruchar-saideliu-sambumbia-samo-serruchar-simeloma-sobraa-sobrao-sopla condon-soplar el bisteck-soplon-sucio-tacazo-tarupido-temiga-temigoso-temigue-tenso-teta-tierruo-tirilla-toche-totona-trampolindebuchevergaoriental-trasero-trastanuta-trimardito-tu taa loco-tufo-tuki-tusa-vaina-vasito de agua-verano-verdugo-vergacion-vergatario-veterano-violin-volar papagallo-vuerga-weon-wepota-wircha-wircho-wiro-zamarro-zamuro-zingar-mrd-pe-ctm-pe-hp-perra-putito-putita-cagada-cagadita-mierdita-cerrano-cerranito-kbro-cagas-chupamela-chúpamela-hpt-pt-prro"
const listBadWords = badWords.split("-")


exports.detectBadWords = functions.firestore.document('chatroom/{roomId}/messages/{messageId}').onCreate(async (doc, ctx) => {
    const filter = new Filter({placeHolder: '*'})
    filter.addWords(...listBadWords)
    const { text, userUid } = doc.data()

    if(filter.isProfane) {
        const cleaned = filter.clean(text)
        await doc.ref.update({text: cleaned}, {merge: true}) 
    }
    return true
})

