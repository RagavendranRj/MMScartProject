import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../common/modal";
import { closeChatInviteModal } from "../../slices/layoutSlice";
import { findOrCreateChannel } from "../../actions/channelActions";

const InviteModal = () => {
  const dispatch = useDispatch();
  const emailInput = useRef();
  const { user } = useSelector(state => state.authState);
  const { showChatInviteModal } = useSelector(state => state.layoutState);
  const { loadingCreate } = useSelector((state) => state.channelState);

  const closeModal = () => {
    dispatch(closeChatInviteModal());
  }

  const sendInvitation = (e) => {
    e.preventDefault();
    dispatch(findOrCreateChannel({ recepientEmail: emailInput.current.value }));
  }

  return (
    user ? <Modal show={showChatInviteModal} onCloseHandler={closeModal}>
      <div className="modal-body py-0">
        <div className="profile modal-gx-n">
          <div className="profile-img text-primary rounded-top-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 400 140.74">
              <g>
                <g>
                  <path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z"></path>
                  <path className="svg-cls-2" d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z"></path>
                  <path className="svg-cls-2" d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z"></path>
                  <circle className="svg-cls-2" cx="94.5" cy="57.5" r="22.5"></circle>
                  <path className="svg-cls-2" d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z"></path>
                </g>
              </g>
            </svg>

            <div className="position-absolute top-0 start-0 p-5">
              <button onClick={closeModal} type="button" className="btn-close btn-close-white btn-close-arrow opacity-100" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>

          <div className="profile-body">
            <div className="avatar avatar-lg">
              <span className="avatar-text bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
              </span>
            </div>

            <h4 className="fw-bold mb-1">Invite</h4>
            <p style={{ fontSize: '16px' }}>Send invitation to start a conversation</p>
          </div>
        </div>

        <hr className="hr-bold modal-gx-n my-0" />
        <form onSubmit={sendInvitation}>
          <div className="modal-py">
            <div className="col-12">
              <label htmlFor="invite-email" className="form-label text-muted">E-mail</label>
              <input
                type="email"
                ref={emailInput}
                id="invite-email"
                disabled={loadingCreate}
                placeholder="name@example.com"
                className="form-control form-control-lg"
              />
            </div>
            <div className="d-flex align-items-center mt-3 px-2">
              <small className="text-muted me-auto">Note: Invite will be sent to the email if the user has already signed up.</small>
            </div>
          </div>

          <hr className="hr-bold modal-gx-n my-0" />

          <div className="modal-py">
            <button
              type="submit"
              disabled={!emailInput.current?.value || loadingCreate}
              className="btn btn-lg btn-primary w-100 d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#invite-modal"
            >
              Send
              <span className="icon ms-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </Modal> : null
  )
}

export default InviteModal