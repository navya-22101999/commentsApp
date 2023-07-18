// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails

  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassname = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)
  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }
  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }
  return (
    <li>
      <div>
        <div className={initialClassName}>
          <p>{initial}</p>
        </div>
        <div>
          <div>
            <p>{name}</p>
            <p>{postedTime} ago</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div>
        <div>
          <img src={likeImageUrl} alt="like" />
          <button
            className={likeTextClassname}
            onClick={onClickLike}
            type="button"
          >
            Like
          </button>
        </div>
        <button
          className="button"
          onClick={onDeleteComment}
          type="button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
