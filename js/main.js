'use stric'
// 1. 모듈내 내보낼 모듈을 명시적으로 설정하기 
// import { r3 } from './modules/utils.js';
// console.log(r3);

// 2. 내보내고 싶은 것들 export 키워드를 사용하여 내보내기
import {el, els, template, insertAfter} from './modules/utils.js';
// console.log(el, els, template);

(function(){

	let broadInfo =[
        {
            figure: {
            name: '빈센조',
            width: 204,
            height: 295,
            src: 'http://img.lifestyler.co.kr/uploads/program/2/2247/skin/f132557590622320827(0).jpg',
            },
            detail: {
            ko: '빈센조',
            genre: 'drama',
            info: '매주 (토,일) 밤 9시 방송',
            desc: '조직의 배신으로 한국으로 오게 된 이탈리아 마피아 변호사가 베테랑 독종 변호사와 함께 악당의 방식으로 악당을 쓸어버리는 이야기'
            }
        },
        {
            figure: {
            name: '마우스',
            width: 204,
            height: 295,
            src: 'http://img.lifestyler.co.kr/uploads/program/2/2246/skin/f132567919128191419(0).jpg'
            },
            detail: {
            ko: '마우스',
            genre: 'drama',
            info: '매주 (수,목) 밤 10시 30분 방송',
            desc: '자타 공인 바른 청년이자 동네 순경인 정바름과 어린 시절 살인마에게 부모를 잃고 복수를 향해 달려온 무법 형사 고무치가 사이코패스 중 상위 1퍼센트로 불리는 가장 악랄한 프레데터와 대치 끝, 운명이 송두리째 뒤바뀌는 모습을 그려낸 본격 인간 헌터 추적극'
            }
        },
        {
            figure: {
            name: '나빌레라',
            width: 204,
            height: 295,
            src: 'http://img.lifestyler.co.kr/uploads/program/2/2241/skin/f132581005046947469(0).jpg'
            },
            detail: {
            ko: '나빌레라',
            genre: 'drama',
            info: '3/22 (월) 밤 9시 첫 방송',
            desc: '나이 일흔에 발레를 시작한 덕출과 스물셋 꿈 앞에서 방황하는 발레리노 채록의 성장 드라마'
            }
        },
        {
            figure: {
                name: '온앤오프',
                width: 204,
                height: 295,
                src: 'http://img.lifestyler.co.kr/uploads/program/2/2128/skin/f132574274065953440(0).jpg'
            },
            detail: {
                ko: '온앤오프',
                genre: 'entertainment',
                info: '매주 (화) 밤 10시 30분 방송',
                desc: '어디서도 본 적 없는 스타들의 \'일\'과 \'일상\' 속 진솔한 이야기! \'진짜 나\'를 보여주는 곳, 사적 모임 [온앤오프]에 당신을 초대합니다!'
            }
        },
        {
            figure: {
                name: '어쩌다 사장',
                width: 204,
                height: 295,
                src: 'http://img.lifestyler.co.kr/uploads/program/2/2249/skin/f132593105183859213(0).jpg'
            },
            detail: {
                ko: '어쩌다 사장',
                genre: 'entertainment',
                info: '매주 (목) 저녁 8시 40분 방송',
                desc: '그 겨울, \'어쩌다\' 사장이 됐다?! 시골 가게를 덜컥 맡게된 도시남자 차태현x조인성의 시골슈퍼 영업일지'
            }
        },
        {
            figure: {
                name: '유 퀴즈 온 더 블럭',
                width: 204,
                height: 295,
                src: 'http://img.lifestyler.co.kr/uploads//program/1/1786/skin/f132283080141023426(0).jpg'
            },
            detail: {
                ko: '유 퀴즈 온 더 블럭',
                genre: 'entertainment',
                info: '매주 (수) 저녁 8시 40분 방송',
                desc: '큰 자기 유재석과 아기자기 조세호의 자기들 마음대로 떠나는 사람 여행!'
            }
        },
        {
        figure: {
                name: '윤스테이',
                width: 204,
                height: 295,
                src: 'http://img.lifestyler.co.kr/uploads/program/2/2240/skin/f132544809232398684(0).jpg'
            },
            detail: {
                ko: '윤스테이',
                genre: 'entertainment',
                info: '매주 (금) 밤 9시 방송',
                desc: '깊은 세월과 자연이 어우러진 한옥에서 정갈한 한식을 맛보고, 다채로운 즐거움을 누리며, 고택의 낭만을 느끼는 시간! 오롯한 쉼을 전달하는, 사장님 마음 담아 [윤스테이]'
            }
        },
        {
        figure: {
        name: '빈센조',
        width: 204,
        height: 295,
        src: 'http://img.lifestyler.co.kr/uploads/program/2/2247/skin/f132557590622320827(0).jpg',
        },
        detail: {
        ko: '빈센조',
        genre: 'drama',
        info: '매주 (토,일) 밤 9시 방송',
        desc: '조직의 배신으로 한국으로 오게 된 이탈리아 마피아 변호사가 베테랑 독종 변호사와 함께 악당의 방식으로 악당을 쓸어버리는 이야기'
        }
        },
    {
        figure: {
        name: '마우스',
        width: 204,
        height: 295,
        src: 'http://img.lifestyler.co.kr/uploads/program/2/2246/skin/f132567919128191419(0).jpg'
        },
        detail: {
        ko: '마우스',
        genre: 'drama',
        info: '매주 (수,목) 밤 10시 30분 방송',
        desc: '자타 공인 바른 청년이자 동네 순경인 정바름과 어린 시절 살인마에게 부모를 잃고 복수를 향해 달려온 무법 형사 고무치가 사이코패스 중 상위 1퍼센트로 불리는 가장 악랄한 프레데터와 대치 끝, 운명이 송두리째 뒤바뀌는 모습을 그려낸 본격 인간 헌터 추적극'
        }
        },
    {
        figure: {
        name: '나빌레라',
        width: 204,
        height: 295,
        src: 'http://img.lifestyler.co.kr/uploads/program/2/2241/skin/f132581005046947469(0).jpg'
        },
        detail: {
        ko: '나빌레라',
        genre: 'drama',
        info: '3/22 (월) 밤 9시 첫 방송',
        desc: '나이 일흔에 발레를 시작한 덕출과 스물셋 꿈 앞에서 방황하는 발레리노 채록의 성장 드라마'
        }
        },
    {
        figure: {
            name: '온앤오프',
            width: 204,
            height: 295,
            src: 'http://img.lifestyler.co.kr/uploads/program/2/2128/skin/f132574274065953440(0).jpg'
        },
        detail: {
            ko: '온앤오프',
            genre: 'entertainment',
            info: '매주 (화) 밤 10시 30분 방송',
            desc: '어디서도 본 적 없는 스타들의 \'일\'과 \'일상\' 속 진솔한 이야기! \'진짜 나\'를 보여주는 곳, 사적 모임 [온앤오프]에 당신을 초대합니다!'
        }
    },
    {
        figure: {
            name: '어쩌다 사장',
            width: 204,
            height: 295,
            src: 'http://img.lifestyler.co.kr/uploads/program/2/2249/skin/f132593105183859213(0).jpg'
        },
        detail: {
            ko: '어쩌다 사장',
            genre: 'entertainment',
            info: '매주 (목) 저녁 8시 40분 방송',
            desc: '그 겨울, \'어쩌다\' 사장이 됐다?! 시골 가게를 덜컥 맡게된 도시남자 차태현x조인성의 시골슈퍼 영업일지'
        }
    },
    {
        figure: {
            name: '유 퀴즈 온 더 블럭',
            width: 204,
            height: 295,
            src: 'http://img.lifestyler.co.kr/uploads//program/1/1786/skin/f132283080141023426(0).jpg'
        },
        detail: {
            ko: '유 퀴즈 온 더 블럭',
            genre: 'entertainment',
            info: '매주 (수) 저녁 8시 40분 방송',
            desc: '큰 자기 유재석과 아기자기 조세호의 자기들 마음대로 떠나는 사람 여행!'
        }
    },
    {
        figure: {
            name: '윤스테이',
            width: 204,
            height: 295,
            src: 'http://img.lifestyler.co.kr/uploads/program/2/2240/skin/f132544809232398684(0).jpg'
        },
        detail: {
            ko: '윤스테이',
            genre: 'entertainment',
            info: '매주 (금) 밤 9시 방송',
            desc: '깊은 세월과 자연이 어우러진 한옥에서 정갈한 한식을 맛보고, 다채로운 즐거움을 누리며, 고택의 낭만을 느끼는 시간! 오롯한 쉼을 전달하는, 사장님 마음 담아 [윤스테이]'
        }
    }];

    // 처음에 뿌릴 데이터 갯수정의 (10개만 뿌림)
    let start_data_num = 10;

    let gride = function(){}

    let html_code = template(broadInfo, function(item){
        // 데이터값
        let figure = item.figure;
        let name = figure.name;
        let src = figure.src;
        let height = figure.height;
        let detail = item.detail;
        let ko = detail.ko;
        let genre = detail.genre;
        let info = detail.info;
        let desc = detail.desc;
        // console.log(ko,genre);

        let template = '<li class="item">\
                    <div class="wrap">\
                        <a href="#">\
                            <figure>\
                                <img class="objectFit" src='+src+'>\
                                <figcaption>'+ name +'</figcaption>\
                            </figure>\
                        </a>\
                        <div class="item_detail">\
                            <strong>'+ name +'<em class="genre '+genre+'">'+ genre +'</em></strong>\
                            <p class="date">'+ info +'</p>\
                            <div class="info">\
                            '+ desc +'\
                            </div>\
                            <button type="button" class="detail-close-btn is-close-panel" aria-label="소개 패널 닫기">×</button>\
                        </div>\
                    </div>\
                </li>';
        return template;
    }, start_data_num);

    let broadList = el('.broad-list');

    broadList.insertAdjacentHTML('afterbegin', html_code);
    insertAfter(broadList, '<button type="button" class="item_more_btn">더보기</button>');    

    let items = els('.item');
    let itemsLink = els('.item a');
    let itemMoreBtn = el('.item_more_btn');

    items.forEach((item)=>{
        setTimeout(() => {
            item.classList.add('show');
        }, 0);
    })

    let itemClickLoaded = () =>{
        // 포스터 클릭이벤트 (디테일 전달)
        itemsLink.forEach((target)=>{
            target.addEventListener('click', (e)=>{
                e.preventDefault();
    
                let itemDetail = e.target.closest('a').nextElementSibling;
                let detailCloseBtn = itemDetail.lastElementChild;
                itemDetail.classList.add('is-active');
                detailCloseBtn.addEventListener('click', function(){
                    itemDetail.classList.remove('is-active');
                })
            })
        })
    }
    itemClickLoaded();

    let wholeNum = broadInfo.length;
    let leftNum = broadInfo.length - start_data_num;
    console.log(wholeNum,wholeNum-leftNum);
    // 더보기 클릭 시 5개 씩 불러오기
    itemMoreBtn.addEventListener('click', function(){

        let leftview = template(broadInfo, function(item){
            // 데이터값
            let figure = item.figure;
            let name = figure.name;
            let src = figure.src;
            let height = figure.height;
            let detail = item.detail;
            let ko = detail.ko;
            let genre = detail.genre;
            let info = detail.info;
            let desc = detail.desc;
            // console.log(ko,genre);
    
            let template = '<li class="item">\
                        <div class="wrap">\
                            <a href="#">\
                                <figure>\
                                    <img class="objectFit" src='+src+'>\
                                    <figcaption>'+ name +'</figcaption>\
                                </figure>\
                            </a>\
                            <div class="item_detail">\
                                <strong>'+ name +'<em class="genre '+genre+'">'+ genre +'</em></strong>\
                                <p class="date">'+ info +'</p>\
                                <div class="info">\
                                '+ desc +'\
                                </div>\
                                <button type="button" class="detail-close-btn is-close-panel" aria-label="소개 패널 닫기">×</button>\
                            </div>\
                        </div>\
                    </li>';
            return template;
        }, wholeNum, wholeNum-leftNum);
        broadList.insertAdjacentHTML('beforeend', leftview);
        items = document.querySelectorAll('.item');
        for(let i=10,l=items.length;i<l;i++){
            console.log(items[i])
            setTimeout(() => {
                items[i].classList.add('show');
            }, 0);
        }
    })

})();