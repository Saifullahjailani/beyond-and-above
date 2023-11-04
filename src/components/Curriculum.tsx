import React from 'react'
import DefaultLayout from './Layout/DefaultLayout';
import createGlobalStyle from 'styled-components';
import styled from 'styled-components';

const Curriculum = ({pageContext}:CurriculumProps) => {
  const {title, content, id} = pageContext;
  return (
    <DefaultLayout isMain={true}>
      <PageContainer content={content ?? "No Content"}/>
    </DefaultLayout>
  )
}

export default Curriculum

interface PageContextType {
  title?: string;
  content?: string;
  id?: string;
}

interface CurriculumProps {
  pageContext: PageContextType
}


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 10%;
position: relative;
h1{
  font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(to bottom left, #553c9a, #ee4b2b);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
h2{
  color: #F26A2E;
  margin-top: 5px;
  background-image: linear-gradient(90deg, rgba(209,116,44,1) 0%, rgba(222,96,0,1) 39%, rgba(255,141,0,1) 100%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  
}
p{
  padding: 8px;
  background-image: linear-gradient(260deg, rgba(222,40,40,1) 7%, rgba(126,34,34,1) 49%, rgba(242,106,46,1) 100%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: 500;
  font-size: 20px;
}

li{
  padding-left: 2%;
  padding-top: 5px;
  background-image: linear-gradient(260deg, rgba(222,40,40,1) 12%, rgba(106,94,39,1) 49%, rgba(189,33,33,1) 100%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

}
ul{
  list-style: none;
}

`;

interface PageContainerProps extends React.HTMLProps<HTMLDivElement> {
  content: string;
}

function PageContainer({ content, ...rest }: PageContainerProps) {
  return (
    <Container {...rest} dangerouslySetInnerHTML={{ __html: content }}></Container>
  );
}
