import Client from './client'

export default class extends Client {
  getComments (eventId, beforeCommentId, size = 10) {
    if (eventId && beforeCommentId) {
      return this.request('GET', `events/${eventId}/comments?size=${size}&before_id=${beforeCommentId}`)
    } else if (eventId) {
      return this.request('GET', `events/${eventId}/comments?size=${size}`)
    }
    console.error('getComments API call')
  }

  getComment (eventId, commentId) {
    if (eventId && commentId) {
      return this.request('GET', `events/${eventId}/comments/${commentId}`)
    }
    console.error('getComment API call')
  }

  newComment (eventId, comment) {
    if (eventId && comment) {
      const options = {
        body: JSON.stringify({ text: comment }),
        headers: { 'Content-Type': 'application/json' }
      }
      return this.request('POST', `events/${eventId}/comments`, options)
    }
    console.error('newComments API call')
  }

  deleteComment (eventId, commentId) {
    if (eventId && commentId) {
      return this.request('DELETE', `events/${eventId}/comments/${commentId}`, {}, false)
    } else {
      console.error('deleteComment API call')
    }
  }
}
