

const langs = {
    ru: {
        title: 'Регистрация на курс'
    },
    tj: {
        title: 'Регистрация на курс (на таджикском)'
    },
    uz: {
        title: 'Регистрация на курс (на узбекском)'
    }
}


$('.header__lang').click(function(){
    if ($(this).hasClass('--now')) return;

    $('.--now').removeClass('--now')
    $(this).addClass('--now')
    const lang = Array.from($(this)[0].classList)[1].replace('--', '')
    changeLang(lang)
})

function changeLang(lang) {
    $('.progress__title').html(langs[lang].title)
}

$('.date-ico').click(()=>{
    $('.dinp')[0].click()
})