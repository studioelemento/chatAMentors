export function FormStatus({ status, success = 'Message sent. Thank you for getting in touch.' }) {
  return (
    <div className="form-status" role="status" data-state={status}>
      {status === 'success' && success}
      {status === 'error' && 'We couldn’t send your message. Please try again.'}
    </div>
  )
}
