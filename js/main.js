import fetchData from '../utils/fetchData.js';
import { el, els, template, insertAfter } from '../utils/utils.js';
import {rendering} from '../modules/Button/Button.js';
import Button from '../modules/Button/Button.js';

function render(state) {
  // 템플릿
  let html_code = template(state.broadInfo, function (item) {
    // 데이터 값
    let figure = item.figure;
    let name = figure.name;
    let src = figure.src;
    let height = figure.height;
    let detail = item.detail;
    let ko = detail.ko;
    let genre = detail.genre;
    let info = detail.info;
    let desc = detail.desc;

    console.log(desc);

    let template =
    `<li class="item">
      <div class="wrap">
        <a href="#">
          <figure>
            <img class="objectFit" src='${src}'>
            <figcaption>${name}</figcaption>
          </figure>
        </a>
        <div class="item_detail">
          <strong>${name}<em class="genre ${genre}">${genre}</em></strong>
          <p class="date">${info}</p>
          <div class="info">${desc}</div>
          <button type="button" class="detail-close-btn is-close-panel" aria-label="소개 패널 닫기">×</button>
        </div>
      </div>
    </li>`;

    return template;
  });

  // const spinnerNode = document.querySelector('.spinnerContainer');
  // spinnerNode.remove();

  let broadList = el('.broad-list');
  broadList.insertAdjacentHTML('afterbegin', html_code);
  // insertAfter(broadList, '<button type="button" class="item_more_btn">더보기</button>');

  let items = els('.item');
  let itemsLink = els('.item a');
  let itemMoreBtn = el('.item_more_btn');

  items.forEach((item) => {
    setTimeout(() => {
      item.classList.add('show');
    }, 0);
  });

  let itemClickLoaded = () => {
    // 포스터 클릭이벤트 (디테일 전달)
    itemsLink.forEach((target) => {
      target.addEventListener('click', (e) => {
        e.preventDefault();

        let itemDetail = e.target.closest('a').nextElementSibling;
        let detailCloseBtn = itemDetail.lastElementChild;
        itemDetail.classList.add('is-active');
        detailCloseBtn.addEventListener('click', function () {
          itemDetail.classList.remove('is-active');
        });
      });
    });
  };
  itemClickLoaded();

  let wholeNum = broadInfo.length;
  let leftNum = broadInfo.length;
  console.log(wholeNum, wholeNum - leftNum);
  // 더보기 클릭 시 5개 씩 불러오기
  itemMoreBtn.addEventListener('click', function () {
    let leftview = template(
      broadInfo,
      function (item) {
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

        let template =
        `<li class="item">
          <div class="wrap">
            <a href="#">
              <figure>
                <img class="objectFit" src='${src}'>
                <figcaption>${name}</figcaption>
              </figure>
            </a>
            <div class="item_detail">
              <strong>${name}<em class="genre ${genre}">${genre}</em></strong>
              <p class="date">${info}</p>
              <div class="info">${desc}</div>
              <button type="button" class="detail-close-btn is-close-panel" aria-label="소개 패널 닫기">×</button>
            </div>
          </div>
        </li>`;
        return template;
      },
      wholeNum,
      wholeNum - leftNum
    );
    broadList.insertAdjacentHTML('beforeend', leftview);
    items = document.querySelectorAll('.item');
    for (let i = 10, l = items.length; i < l; i++) {
      console.log(items[i]);
      setTimeout(() => {
        items[i].classList.add('show');
      }, 0);
    }
  });
}

(function () {
  // 상태 객체
  let state = {
    // 데이터 로딩 상태
    isPending: false,
    // 오류 상태
    error: null,
    // 데이터 상태
    broadInfo: []
  };

  // 비동기 통신 요청
  state.isPending = true;

  // API Service Object
  // .create()
  // .read()
  // .update()
  // .delete()

  fetchData('http://localhost:3000/movies?_start=1&_limit=6')
    .then((response) => response.json())
    .then((json) => {
      // immutable 데이터 관리 → React
      state = {
        ...state,
        isPending: false,
        broadInfo: json
      };

      render(state);
    })
    .catch((error) => {
      state = {
        ...state,
        isPending: false,
        error
      };
    });

  if (state.isPending) {
    console.log('로딩 중....');
    return;
  }

  if (state.error) {
    console.error(state.error.message);
    return;
  }
})();

const moreButton = new Button('button',{
  'type' : 'button Button--normal Button--more',
  'aria-label' : '아이템 더보기',
  'children' : `<img src="" alt="">`,
  'onClick'(e){
    this.active();
  } 
}, '리스트 더보기')

const rameee = document.getElementById('rameee');
rendering(moreButton.render(), rameee);