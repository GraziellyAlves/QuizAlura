import React from 'react';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
// import QuizContainer from '../scr/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button';
import Widget from '../src/components/Widget';


function loadingWidget(){
    return (
        <Widget>
            <Widget.Header>
                carregando...
            </Widget.Header>
            <Widget.Component>
                [defasio do loading]
            </Widget.Component>
        </Widget>
        
      );
}

function QuestionWidget({question}){
    return(
        <Widget>
            <Widget.Header>
                        {/*<BackLinkArrow href ="/" />*/}
                        <h3>
                            Pergunta 1
                            {`${db.questions.length}`}
                        </h3>
                    </Widget.Header>
                    <img
                        alt="Descrição"
                        style={{
                            width:'100%',
                            height:'150px',
                            objectFit:'cover',
                        }}
                        src={question.image}
                    />
                    <width.Content>
                        <h2>
                            titulo
                        </h2>
                        <p>
                            descrição
                        </p>
                        <Button>CONFIRMAR</Button>
                    </width.Content>
            </Widget>    

    );
}



export default function QuizPage(){
    const question = db.questions[0];
    return(
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>

                <QuizLogo/>
                <QuestionWidget question= {question}/>                

                <loadingWidget/>
            </QuizContainer>
        </QuizBackground>
    )
}