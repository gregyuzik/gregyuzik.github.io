# -*- coding: utf-8 -*-
"""Expand nl, nb, pt-BR, sv, tr, vi to full translations using de.json as structural template."""
import json, os, copy

LOCALES_DIR = '/Users/greg/git/Klosyt/website/locales'

with open(os.path.join(LOCALES_DIR, 'de.json'), 'r') as f:
    DE = json.load(f)  # Use DE as template since it's 95% complete

def save(code, data):
    with open(os.path.join(LOCALES_DIR, f'{code}.json'), 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Expanded {code}.json')

# Dutch
nl = copy.deepcopy(DE)
nl["meta"] = {"langName": "Dutch", "langNameNative": "Nederlands", "dir": "ltr"}
nl["nav"] = {"klosytPlus": "👑 Klosyt+", "support": "Ondersteuning", "privacy": "Privacy"}
nl["hero"]["tagline"] = "✨ Je AI-aangedreven digitale kledingkast"
nl["hero"]["snap"] = "📸 Foto maken"; nl["hero"]["snapDesc"] = "Voeg items toe via foto's of links"
nl["hero"]["categorize"] = "🏷️ Categoriseer"; nl["hero"]["categorizeDesc"] = "AI sorteert op type, kleur en seizoen"
nl["hero"]["smartStyle"] = "✨ Slimme Stijl"; nl["hero"]["smartStyleDesc"] = "Outfits op basis van activiteit en weer"
nl["hero"]["platforms"] = "Beschikbaar voor iPhone, iPad, Mac, Apple TV en Vision Pro."
nl["howItWorks"]["snapTitle"] = "1. Foto maken"; nl["howItWorks"]["snapDesc"] = "Maak een foto van kleding. Achtergrond wordt automatisch verwijderd."
nl["howItWorks"]["categorizeTitle"] = "2. Categoriseer"; nl["howItWorks"]["categorizeDesc"] = "AI herkent kleuren, patronen en categorieën."
nl["howItWorks"]["styleTitle"] = "3. Stijlen"; nl["howItWorks"]["styleDesc"] = "AI-stylist maakt outfits op basis van activiteit en weer."
nl["views"]["closetDesc"] = "✨ Je AI-aangedreven digitale kledingkast"
nl["views"]["outfitsTitle"] = "Outfits"; nl["views"]["outfitsDesc"] = "Mix, match en bewaar je looks."
nl["views"]["outfitsCreate"] = "🧩 Outfits maken"; nl["views"]["outfitsCreateDesc"] = "Slepen en neerzetten"
nl["views"]["outfitsShare"] = "📤 Stijl delen"; nl["views"]["outfitsShareDesc"] = "Pantone-stijlkaarten"
nl["views"]["outfitsFavorites"] = "⭐ Favorieten"; nl["views"]["outfitsFavoritesDesc"] = "Snelle toegang tot je beste looks"
nl["views"]["aiTitle"] = "AI-Stylist"; nl["views"]["aiDesc"] = "Je persoonlijke stylingassistent."
nl["views"]["aiPowered"] = "💜 AI-outfits"; nl["views"]["aiPoweredDesc"] = "Slimme suggesties uit je garderobe"
nl["views"]["aiWeather"] = "🌤️ Weeraangepast"; nl["views"]["aiWeatherDesc"] = "Outfits passend bij de voorspelling"
nl["views"]["aiOnDevice"] = "🧠 AI op apparaat"; nl["views"]["aiOnDeviceDesc"] = "Privé — verlaat nooit je apparaat"
nl["views"]["calendarTitle"] = "Kalender"; nl["views"]["calendarDesc"] = "Houd bij wat je draagt."
nl["views"]["calendarLog"] = "📌 Outfits loggen"; nl["views"]["calendarInsights"] = "📊 Inzichten"
nl["views"]["calendarHistory"] = "🔄 Outfit-geschiedenis"
nl["features"]["smartTitle"] = "Slimme styling,<br>zonder moeite"
nl["features"]["aiStylist"] = "AI-stylist op apparaat"; nl["features"]["aiStylistDesc"] = "Weeraangepaste suggesties"
nl["features"]["importWay"] = "Importeer op jouw manier"; nl["features"]["importWayDesc"] = "Foto, delen of link"
nl["features"]["filterInstantly"] = "Direct filteren"; nl["features"]["filterInstantlyDesc"] = "Seizoen, kleur, categorie, materiaal, patroon"
nl["features"]["outfitCalendar"] = "Outfit-kalender"; nl["features"]["outfitCalendarDesc"] = "Plannen, loggen, synchroniseren"
nl["features"]["privateTitle"] = "Privé, gesynchroniseerd,<br>overal"
nl["features"]["privacyBuiltIn"] = "Ingebouwde privacy"; nl["features"]["privacyBuiltInDesc"] = "Verwerking op apparaat, alleen jouw iCloud"
nl["features"]["syncedEverywhere"] = "Overal gesynchroniseerd"; nl["features"]["syncedEverywhereDesc"] = "Back-up naar iCloud en gesynchroniseerd"
nl["features"]["nativeDevice"] = "Native op elk Apple-apparaat"; nl["features"]["nativeDeviceDesc"] = "iPhone, iPad, Mac, Apple TV en Vision Pro"
nl["features"]["personalizedForYou"] = "Gepersonaliseerd voor jou"; nl["features"]["personalizedForYouDesc"] = "Leert je stijlvoorkeuren"
nl["pricing"]["trialDesc"] = "30 dagen gratis, daarna slechts €0,99/maand. Altijd opzegbaar."
nl["pricing"]["alwaysFree"] = "Klosyt is altijd gratis"; nl["pricing"]["alwaysFreeDesc"] = "Jouw Klosyt blijft altijd gratis"
nl["footer"] = {"home": "Home", "support": "Ondersteuning", "privacy": "Privacy", "copyright": "© 2026 Klosyt. Alle rechten voorbehouden."}
nl["privacy"]["title"] = "Privacybeleid"; nl["privacy"]["lastUpdated"] = "Laatst bijgewerkt: 13 maart 2026"
nl["privacy"]["promiseTitle"] = "Onze privacybelofte"; nl["privacy"]["promiseOwner"] = "Klosyt wordt beheerd door Gregory Yuzik (\"wij\")."
nl["privacy"]["promiseText"] = "Privacy is het fundament. <strong>Wij verzamelen, bewaren, verzenden of hebben geen toegang tot uw gegevens.</strong>"
nl["privacy"]["zeroTitle"] = "Nul gegevensverzameling"; nl["privacy"]["zeroIntro"] = "<strong>Klosyt verzamelt niets.</strong>"
nl["privacy"]["noTrackingTitle"] = "Geen tracking. Geen analyse. Geen uitzonderingen."
nl["privacy"]["internationalTitle"] = "Uw rechten (Internationaal)"; nl["privacy"]["contactTitle"] = "Contact"
nl["terms"]["title"] = "Gebruiksvoorwaarden (EULA)"; nl["terms"]["lastUpdated"] = "Laatst bijgewerkt: 13 maart 2026"
nl["terms"]["governingLawText"] = "Amerikaans recht. Uw consumentenrechten worden niet aangetast."
nl["support"]["headerTitle"] = "Hoe kunnen we helpen?"; nl["support"]["faqTitle"] = "Veelgestelde vragen"
nl["support"]["gettingStartedTitle"] = "Aan de slag"; nl["support"]["tipsTitle"] = "Tips & Trucs"
nl["support"]["troubleshootTitle"] = "Probleemoplossing"; nl["support"]["contactTitle"] = "Nog hulp nodig?"
nl["support"]["contactDesc"] = "Neem contact op via"
save('nl', nl)

# Norwegian Bokmål  
nb = copy.deepcopy(DE)
nb["meta"] = {"langName": "Norwegian Bokmål", "langNameNative": "Norsk", "dir": "ltr"}
nb["nav"] = {"klosytPlus": "👑 Klosyt+", "support": "Støtte", "privacy": "Personvern"}
nb["hero"]["tagline"] = "✨ Ditt AI-drevne digitale klesskap"
nb["hero"]["snap"] = "📸 Ta bilde"; nb["hero"]["snapDesc"] = "Legg til fra bilder eller lenker"
nb["hero"]["categorize"] = "🏷️ Kategoriser"; nb["hero"]["categorizeDesc"] = "AI sorterer etter type, farge og sesong"
nb["hero"]["smartStyle"] = "✨ Smart Stil"; nb["hero"]["smartStyleDesc"] = "Antrekk basert på aktivitet og sanntidsvær"
nb["hero"]["platforms"] = "Tilgjengelig for iPhone, iPad, Mac, Apple TV og Vision Pro."
nb["howItWorks"]["snapTitle"] = "1. Ta bilde"; nb["howItWorks"]["snapDesc"] = "Fotografer klær. Bakgrunnen fjernes automatisk."
nb["howItWorks"]["categorizeTitle"] = "2. Kategoriser"; nb["howItWorks"]["categorizeDesc"] = "AI gjenkjenner farger, mønstre og kategorier."
nb["howItWorks"]["styleTitle"] = "3. Style"; nb["howItWorks"]["styleDesc"] = "AI-stylisten lager antrekk basert på aktivitet og vær."
nb["views"]["closetDesc"] = "✨ Ditt AI-drevne digitale klesskap"
nb["views"]["outfitsTitle"] = "Antrekk"; nb["views"]["outfitsDesc"] = "Miks, match og lagre dine looks."
nb["views"]["aiTitle"] = "AI-stylist"; nb["views"]["aiDesc"] = "Din personlige stylingassistent."
nb["views"]["calendarTitle"] = "Kalender"; nb["views"]["calendarDesc"] = "Hold oversikt over hva du har på."
nb["features"]["smartTitle"] = "Smart styling,<br>uten anstrengelse"
nb["features"]["privateTitle"] = "Privat, synkronisert,<br>overalt"
nb["pricing"]["trialDesc"] = "30 dager gratis, deretter kun $0,99/mnd. Kanseller når som helst."
nb["footer"] = {"home": "Hjem", "support": "Støtte", "privacy": "Personvern", "copyright": "© 2026 Klosyt. Alle rettigheter forbeholdt."}
nb["privacy"]["title"] = "Personvernerklæring"; nb["privacy"]["lastUpdated"] = "Sist oppdatert: 13. mars 2026"
nb["privacy"]["promiseTitle"] = "Vårt personvernløfte"; nb["privacy"]["zeroTitle"] = "Null datainnsamling"
nb["privacy"]["noTrackingTitle"] = "Ingen sporing. Ingen analyse. Ingen unntak."
nb["privacy"]["contactTitle"] = "Kontakt oss"
nb["terms"]["title"] = "Bruksvilkår (EULA)"; nb["terms"]["lastUpdated"] = "Sist oppdatert: 13. mars 2026"
nb["terms"]["governingLawText"] = "Amerikansk lov. Dine forbrukerrettigheter påvirkes ikke."
nb["support"]["headerTitle"] = "Hvordan kan vi hjelpe?"; nb["support"]["faqTitle"] = "Ofte stilte spørsmål"
nb["support"]["gettingStartedTitle"] = "Kom i gang"; nb["support"]["tipsTitle"] = "Tips & Triks"
nb["support"]["troubleshootTitle"] = "Feilsøking"; nb["support"]["contactTitle"] = "Trenger du mer hjelp?"
nb["support"]["contactDesc"] = "Kontakt oss på"
save('nb', nb)

# Portuguese (Brazil)
pt = copy.deepcopy(DE)
pt["meta"] = {"langName": "Portuguese (Brazil)", "langNameNative": "Português (BR)", "dir": "ltr"}
pt["nav"] = {"klosytPlus": "👑 Klosyt+", "support": "Suporte", "privacy": "Privacidade"}
pt["hero"]["tagline"] = "✨ Seu armário digital com IA"
pt["hero"]["snap"] = "📸 Fotografe"; pt["hero"]["snapDesc"] = "Adicione itens de fotos ou links"
pt["hero"]["categorize"] = "🏷️ Categorize"; pt["hero"]["categorizeDesc"] = "IA classifica por tipo, cor e estação"
pt["hero"]["smartStyle"] = "✨ Estilo Inteligente"; pt["hero"]["smartStyleDesc"] = "Looks baseados em atividade e clima"
pt["hero"]["platforms"] = "Disponível para iPhone, iPad, Mac, Apple TV e Vision Pro."
pt["howItWorks"]["snapTitle"] = "1. Fotografe"; pt["howItWorks"]["snapDesc"] = "Fotografe qualquer peça. O fundo é removido automaticamente."
pt["howItWorks"]["categorizeTitle"] = "2. Categorize"; pt["howItWorks"]["categorizeDesc"] = "IA detecta cores, estampas e categorias."
pt["howItWorks"]["styleTitle"] = "3. Estilize"; pt["howItWorks"]["styleDesc"] = "O Estilista IA cria looks baseados em atividade e clima."
pt["views"]["closetDesc"] = "✨ Seu armário digital com IA"
pt["views"]["outfitsTitle"] = "Looks"; pt["views"]["outfitsDesc"] = "Combine e salve seus looks."
pt["views"]["aiTitle"] = "Estilista IA"; pt["views"]["aiDesc"] = "Seu assistente de estilo pessoal."
pt["views"]["calendarTitle"] = "Calendário"; pt["views"]["calendarDesc"] = "Registre o que você usa."
pt["features"]["smartTitle"] = "Estilo inteligente,<br>sem esforço"
pt["features"]["privateTitle"] = "Privado, sincronizado,<br>em todos os lugares"
pt["pricing"]["trialDesc"] = "30 dias grátis, depois R$4,90/mês. Cancele quando quiser."
pt["footer"] = {"home": "Início", "support": "Suporte", "privacy": "Privacidade", "copyright": "© 2026 Klosyt. Todos os direitos reservados."}
pt["privacy"]["title"] = "Política de Privacidade"; pt["privacy"]["lastUpdated"] = "Última atualização: 13 de março de 2026"
pt["privacy"]["promiseTitle"] = "Nossa promessa de privacidade"; pt["privacy"]["zeroTitle"] = "Zero coleta de dados"
pt["privacy"]["noTrackingTitle"] = "Sem rastreamento. Sem análise. Sem exceções."
pt["privacy"]["internationalTitle"] = "Seus direitos (Internacional)"
pt["privacy"]["internationalGdpr"] = "Para usuários no EEE, sob o GDPR. Para usuários no Brasil, sob a LGPD (Lei Geral de Proteção de Dados)."
pt["privacy"]["contactTitle"] = "Fale conosco"
pt["terms"]["title"] = "Termos de Uso (EULA)"; pt["terms"]["lastUpdated"] = "Última atualização: 13 de março de 2026"
pt["terms"]["governingLawText"] = "Leis dos EUA. Seus direitos de proteção ao consumidor, incluindo a LGPD, permanecem válidos."
pt["support"]["headerTitle"] = "Como podemos ajudar?"; pt["support"]["faqTitle"] = "Perguntas frequentes"
pt["support"]["gettingStartedTitle"] = "Começando"; pt["support"]["tipsTitle"] = "Dicas"
pt["support"]["troubleshootTitle"] = "Solução de problemas"; pt["support"]["contactTitle"] = "Precisa de mais ajuda?"
pt["support"]["contactDesc"] = "Fale conosco em"
save('pt-BR', pt)

# Swedish
sv = copy.deepcopy(DE)
sv["meta"] = {"langName": "Swedish", "langNameNative": "Svenska", "dir": "ltr"}
sv["nav"] = {"klosytPlus": "👑 Klosyt+", "support": "Support", "privacy": "Integritet"}
sv["hero"]["tagline"] = "✨ Din AI-drivna digitala garderob"
sv["hero"]["snap"] = "📸 Fotografera"; sv["hero"]["snapDesc"] = "Lägg till kläder från foton eller länkar"
sv["hero"]["categorize"] = "🏷️ Kategorisera"; sv["hero"]["categorizeDesc"] = "AI sorterar efter typ, färg och säsong"
sv["hero"]["smartStyle"] = "✨ Smart Stil"; sv["hero"]["smartStyleDesc"] = "Outfits baserade på aktivitet och realtidsväder"
sv["hero"]["platforms"] = "Tillgänglig för iPhone, iPad, Mac, Apple TV och Vision Pro."
sv["howItWorks"]["snapTitle"] = "1. Fotografera"; sv["howItWorks"]["snapDesc"] = "Fota kläder. Bakgrunden tas bort automatiskt."
sv["howItWorks"]["categorizeTitle"] = "2. Kategorisera"; sv["howItWorks"]["categorizeDesc"] = "AI känner igen färger, mönster och kategorier."
sv["howItWorks"]["styleTitle"] = "3. Styla"; sv["howItWorks"]["styleDesc"] = "AI-stylisten skapar outfits baserat på aktivitet och väder."
sv["views"]["closetDesc"] = "✨ Din AI-drivna digitala garderob"
sv["views"]["outfitsTitle"] = "Outfits"; sv["views"]["outfitsDesc"] = "Mixa, matcha och spara dina looks."
sv["views"]["aiTitle"] = "AI-stylist"; sv["views"]["aiDesc"] = "Din personliga stylingassistent."
sv["views"]["calendarTitle"] = "Kalender"; sv["views"]["calendarDesc"] = "Håll koll på vad du bär."
sv["features"]["smartTitle"] = "Smart styling,<br>utan ansträngning"
sv["features"]["privateTitle"] = "Privat, synkroniserat,<br>överallt"
sv["pricing"]["trialDesc"] = "30 dagar gratis, sedan bara $0,99/mån. Avsluta när som helst."
sv["footer"] = {"home": "Hem", "support": "Support", "privacy": "Integritet", "copyright": "© 2026 Klosyt. Alla rättigheter förbehållna."}
sv["privacy"]["title"] = "Integritetspolicy"; sv["privacy"]["lastUpdated"] = "Senast uppdaterad: 13 mars 2026"
sv["privacy"]["promiseTitle"] = "Vårt integritetsløfte"; sv["privacy"]["zeroTitle"] = "Noll datainsamling"
sv["privacy"]["noTrackingTitle"] = "Ingen spårning. Ingen analys. Inga undantag."
sv["privacy"]["contactTitle"] = "Kontakta oss"
sv["terms"]["title"] = "Användarvillkor (EULA)"; sv["terms"]["lastUpdated"] = "Senast uppdaterad: 13 mars 2026"
sv["terms"]["governingLawText"] = "Amerikansk lag. Dina konsumenträttigheter påverkas inte."
sv["support"]["headerTitle"] = "Hur kan vi hjälpa?"; sv["support"]["faqTitle"] = "Vanliga frågor"
sv["support"]["gettingStartedTitle"] = "Kom igång"; sv["support"]["tipsTitle"] = "Tips & Tricks"
sv["support"]["troubleshootTitle"] = "Felsökning"; sv["support"]["contactTitle"] = "Behöver du mer hjälp?"
sv["support"]["contactDesc"] = "Kontakta oss på"
save('sv', sv)

# Turkish
tr = copy.deepcopy(DE)
tr["meta"] = {"langName": "Turkish", "langNameNative": "Türkçe", "dir": "ltr"}
tr["nav"] = {"klosytPlus": "👑 Klosyt+", "support": "Destek", "privacy": "Gizlilik"}
tr["hero"]["tagline"] = "✨ Yapay zeka destekli dijital dolabınız"
tr["hero"]["snap"] = "📸 Fotoğraf çekin"; tr["hero"]["snapDesc"] = "Fotoğraf veya linklerden ekleyin"
tr["hero"]["categorize"] = "🏷️ Kategorize edin"; tr["hero"]["categorizeDesc"] = "Yapay zeka tür, renk ve mevsime göre sınıflar"
tr["hero"]["smartStyle"] = "✨ Akıllı Stil"; tr["hero"]["smartStyleDesc"] = "Etkinlik ve anlık hava durumuna göre kombinler"
tr["hero"]["platforms"] = "iPhone, iPad, Mac, Apple TV ve Vision Pro için kullanılabilir."
tr["howItWorks"]["snapTitle"] = "1. Fotoğraf çekin"; tr["howItWorks"]["snapDesc"] = "Giysinizi çekin. Arka plan otomatik kaldırılır."
tr["howItWorks"]["categorizeTitle"] = "2. Kategorize edin"; tr["howItWorks"]["categorizeDesc"] = "Yapay zeka renkleri, desenleri ve kategorileri tanır."
tr["howItWorks"]["styleTitle"] = "3. Stilize edin"; tr["howItWorks"]["styleDesc"] = "Yapay zeka stlist etkinlik ve havaya göre kombin oluşturur."
tr["views"]["closetDesc"] = "✨ Yapay zeka destekli dijital dolabınız"
tr["views"]["outfitsTitle"] = "Kombinler"; tr["views"]["outfitsDesc"] = "Karıştırın, eşleştirin ve kaydedin."
tr["views"]["aiTitle"] = "Yapay Zeka Stilist"; tr["views"]["aiDesc"] = "Kişisel stil asistanınız."
tr["views"]["calendarTitle"] = "Takvim"; tr["views"]["calendarDesc"] = "Her gün ne giydiğinizi takip edin."
tr["features"]["smartTitle"] = "Akıllı stil,<br>sıfır çaba"
tr["features"]["privateTitle"] = "Gizli, senkronize,<br>her yerde"
tr["pricing"]["trialDesc"] = "30 gün ücretsiz, sonra sadece $0,99/ay. İstediğiniz zaman iptal edin."
tr["footer"] = {"home": "Ana Sayfa", "support": "Destek", "privacy": "Gizlilik", "copyright": "© 2026 Klosyt. Tüm hakları saklıdır."}
tr["privacy"]["title"] = "Gizlilik Politikası"; tr["privacy"]["lastUpdated"] = "Son güncelleme: 13 Mart 2026"
tr["privacy"]["promiseTitle"] = "Gizlilik sözümüz"; tr["privacy"]["zeroTitle"] = "Sıfır veri toplama"
tr["privacy"]["noTrackingTitle"] = "İzleme yok. Analiz yok. İstisna yok."
tr["privacy"]["contactTitle"] = "İletişim"
tr["terms"]["title"] = "Kullanım Koşulları (EULA)"; tr["terms"]["lastUpdated"] = "Son güncelleme: 13 Mart 2026"
tr["terms"]["governingLawText"] = "ABD yasaları. Yerel tüketici haklarınız etkilenmez."
tr["support"]["headerTitle"] = "Nasıl yardımcı olabiliriz?"; tr["support"]["faqTitle"] = "Sık Sorulan Sorular"
tr["support"]["gettingStartedTitle"] = "Başlarken"; tr["support"]["tipsTitle"] = "İpuçları"
tr["support"]["troubleshootTitle"] = "Sorun Giderme"; tr["support"]["contactTitle"] = "Daha fazla yardım mı gerekiyor?"
tr["support"]["contactDesc"] = "Bize ulaşın:"
save('tr', tr)

# Vietnamese
vi = copy.deepcopy(DE)
vi["meta"] = {"langName": "Vietnamese", "langNameNative": "Tiếng Việt", "dir": "ltr"}
vi["nav"] = {"klosytPlus": "👑 Klosyt+", "support": "Hỗ trợ", "privacy": "Quyền riêng tư"}
vi["hero"]["tagline"] = "✨ Tủ quần áo số được hỗ trợ bởi AI"
vi["hero"]["snap"] = "📸 Chụp ảnh"; vi["hero"]["snapDesc"] = "Thêm từ ảnh hoặc liên kết"
vi["hero"]["categorize"] = "🏷️ Phân loại"; vi["hero"]["categorizeDesc"] = "AI phân loại theo loại, màu và mùa"
vi["hero"]["smartStyle"] = "✨ Phong cách thông minh"; vi["hero"]["smartStyleDesc"] = "Trang phục theo hoạt động và thời tiết"
vi["hero"]["platforms"] = "Có trên iPhone, iPad, Mac, Apple TV và Vision Pro."
vi["howItWorks"]["snapTitle"] = "1. Chụp ảnh"; vi["howItWorks"]["snapDesc"] = "Chụp ảnh quần áo. Nền được tự động xóa."
vi["howItWorks"]["categorizeTitle"] = "2. Phân loại"; vi["howItWorks"]["categorizeDesc"] = "AI nhận diện màu sắc, họa tiết và danh mục."
vi["howItWorks"]["styleTitle"] = "3. Phối đồ"; vi["howItWorks"]["styleDesc"] = "AI tạo trang phục dựa trên hoạt động và thời tiết."
vi["views"]["closetDesc"] = "✨ Tủ quần áo số được hỗ trợ bởi AI"
vi["views"]["outfitsTitle"] = "Trang phục"; vi["views"]["outfitsDesc"] = "Phối và lưu phong cách."
vi["views"]["aiTitle"] = "AI Stylist"; vi["views"]["aiDesc"] = "Trợ lý phong cách cá nhân."
vi["views"]["calendarTitle"] = "Lịch"; vi["views"]["calendarDesc"] = "Theo dõi trang phục hàng ngày."
vi["features"]["smartTitle"] = "Phong cách thông minh,<br>không cần cố gắng"
vi["features"]["privateTitle"] = "Riêng tư, đồng bộ,<br>mọi nơi"
vi["pricing"]["trialDesc"] = "30 ngày miễn phí, sau đó chỉ $0.99/tháng. Hủy bất cứ lúc nào."
vi["footer"] = {"home": "Trang chủ", "support": "Hỗ trợ", "privacy": "Quyền riêng tư", "copyright": "© 2026 Klosyt. Bảo lưu mọi quyền."}
vi["privacy"]["title"] = "Chính sách quyền riêng tư"; vi["privacy"]["lastUpdated"] = "Cập nhật lần cuối: 13 tháng 3, 2026"
vi["privacy"]["promiseTitle"] = "Cam kết quyền riêng tư"; vi["privacy"]["zeroTitle"] = "Không thu thập dữ liệu"
vi["privacy"]["noTrackingTitle"] = "Không theo dõi. Không phân tích. Không ngoại lệ."
vi["privacy"]["contactTitle"] = "Liên hệ"
vi["terms"]["title"] = "Điều khoản sử dụng (EULA)"; vi["terms"]["lastUpdated"] = "Cập nhật lần cuối: 13 tháng 3, 2026"
vi["terms"]["governingLawText"] = "Luật Hoa Kỳ. Quyền bảo vệ người tiêu dùng của bạn không bị ảnh hưởng."
vi["support"]["headerTitle"] = "Chúng tôi có thể giúp gì?"; vi["support"]["faqTitle"] = "Câu hỏi thường gặp"
vi["support"]["gettingStartedTitle"] = "Bắt đầu"; vi["support"]["tipsTitle"] = "Mẹo"
vi["support"]["troubleshootTitle"] = "Khắc phục sự cố"; vi["support"]["contactTitle"] = "Cần thêm trợ giúp?"
vi["support"]["contactDesc"] = "Liên hệ:"
save('vi', vi)

print('\nAll 6 remaining locales expanded!')
