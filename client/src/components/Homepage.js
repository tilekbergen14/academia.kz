import React from "react";
import Card from "./cards/HomeCard"

export default function Homepage() {
  return (
    <div className="container">
      <header className="homepage-header row">
        <div className="col-xs-12 col-md-6 m-auto">
        <h3 className="font-text">
          academy.kz оқушылар мен студенттер үшін жасалған сайт. Мұнда үйрен
          және басқаға үйрету арқылы біліміңді жетілдір!
        </h3>
        </div>
      </header>
      <main>
          <div className="row">
            <Card title="Рефераттар" icon='FileEarmarkFontFill'/>
            <Card title="Программалау" icon='FileCodeFill'/>
            <Card title="Сұрақ-жауап" icon='QuestionCircleFill'/>
          </div>
      </main>
    </div>
  );
}
