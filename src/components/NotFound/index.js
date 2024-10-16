import {
  NotFoundPageContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NotFoundPageContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading> Page Not Found </NotFoundHeading>
    <NotFoundDescription>
      We are sorry, the page you requested could not be found
    </NotFoundDescription>
  </NotFoundPageContainer>
)

export default NotFound
