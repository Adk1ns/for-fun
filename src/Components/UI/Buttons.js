import styled from 'styled-components'

const TransparentBTN = styled.div`
	background-color: none;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	${'' /* font-weight: bold; */}
	border: 2px solid #c5c3c6;
	cursor: pointer;

	@media screen and (max-width: 446px) {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}
`

export { TransparentBTN }
