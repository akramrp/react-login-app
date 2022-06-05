import styled from 'styled-components';

export const Box = styled.div`
padding: 5px 0px;
background: #1976d2;
${'' /* position: absolute; */}
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 30px 15px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 10px;
font-size: 16px;
text-decoration: none;

&:hover {
	color: #fff;
	transition: 200ms ease-in;
	-ms-transform: scale(1.5); /* IE 9 */
	-webkit-transform: scale(1.5); /* Safari 3-8 */
	transform: scale(1.5);
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 20px;
font-weight: bold;
`;