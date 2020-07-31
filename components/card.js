const diarytemplate = document.createElement("template");
diarytemplate.innerHTML = ` <style>
.flip-card {
    background-color: transparent;
    position: absolute;
    height: 100%;
    width: 100%;
    perspective: 1000px;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  
  .flip-card:active .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  .flip-card-front img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  
  .flip-card-front h4 {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1vh;
    color: white;
  }
  
  .head {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    width: 100%;
  }
  
  .flip-card-front h4 {
    font-size: 3vh;
  }
  .head h4 {
    margin: 0.5vh;
    font-size: 3vh;
  }
  
  .flip-card-back p {
    font-size: 2.2vh;
    margin-top: 4vh;
  }
  .flip-card-back {
    background-color: #5d6d7c;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
</style>

<div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="./assets/test1.jpg" alt="Avatar" />
            <h4 id="front">Topic | Date</h4>
          </div>
          <div class="flip-card-back">
            <div class="head">
              <h4 id="topic">Topic</h4>
              <h4 id="date">Date</h4>
            </div>
            <p>
              <slot name="content"/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, sequi ratione provident, ut temporibus, voluptatum
              ducimus dolor magnam aliquid quaerat magni accusantium dolorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Delectus inventore quod et consequatur dolore ad expedita
              velit harum tempore ut. Eius, at error. Vitae fuga beatae
              magni et quisquam non. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magnam commodi officiis labore ab repellat,
              
            </p>
          </div>
        </div>
</div>
`;

class diaryCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(diarytemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#topic").innerText = this.getAttribute(
      "topic"
    );
    this.shadowRoot.querySelector("#date").innerText = this.getAttribute(
      "date"
    );
    this.shadowRoot.querySelector("#front").innerText =
      this.getAttribute("topic") + " | " + this.getAttribute("date");
  }
}

window.customElements.define("diary-card", diaryCard);
