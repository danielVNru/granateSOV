

// 

const decorStage = [
    { left: 0 },
    { left: '50%' },
    { 
        left: '95%'
    },
]

stage = 0

$('.screen1 .next').click(()=>{
    stage+=1
    $('.decol-line').css(decorStage[stage])
    $('.screen1').addClass('--none')
    $('.screen2').removeClass('--none')
    $('.header').css({opacity: 0})

    $('.s1').removeClass('--now')
    $('.s2').addClass('--now')
})

$('.screen2 .next').click(()=>{
    stage+=1
    $('.decol-line').css(decorStage[stage])
    $('.screen2').addClass('--none')
    $('.screen3').removeClass('--none')

    $('.s2').removeClass('--now')
    $('.s3').addClass('--now')
})