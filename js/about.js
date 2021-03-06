window.sr = ScrollReveal();
sr.reveal(".service" , {
    duration: 2000, 
    origin: "bottom" ,
    distance: "10%",
    delay: 200,
    cleanup: true,
    veiwFactor: 1,
    easing: 'cubic-bezier(0.1, .2, .3, 1)' 
});

sr.reveal(".about h1" , {
    duration: 2000,
    origin: "bottom" , 
    distance : '20%',
    easing: 'cubic-bezier(0.1, .2, .3, 1)' 
});

sr.reveal(".about h2" , {
    duration: 2000,
    delay: 250,
    origin: "bottom" , 
    distance : '20%',
    easing: 'cubic-bezier(0.1, .2, .3, 1)' 
});

sr.reveal(".about p" , {
    duration: 2000,
    delay: 700,
    origin: "bottom" , 
    distance : '10%',
    easing: 'cubic-bezier(0.1, .2, .3, 1)' 
});

$(window).resize(check);
$(document).ready(check);
// $(window).load(check);
function check() {
    if ($(window).width() <= 576) {
        $(".about p").html("لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته");
    } else {
        $(".about p").html("لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.");
    }
    
    if ($(window).width() <= 400) {
        $(".about p").html("لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و");
    }
}
