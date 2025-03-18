export const ICE_SERVERS = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};

export const CHUNK_SIZE = 20 * 1024 * 1024;

export enum PeerState {
  IDLE,
  OFFER_CREATED,
  OFFER_SET,
  OFFER_ACCEPTED,
  ANSWER_CREATED,
  ANSWER_SET,
  CONNECTING,
  CONNECTED,
  TRANSFERRING,
}

export enum PeerEvent {
  OFFER_CREATED = "offerCreated",
  OFFER_ACCEPTED = "offerAccepted",
  ANSWER_CREATED = "answerCreated",
  PEER_CONNECTED = "peerConnected",
  INIT_TRANSFER = "initTransfer",
}

export enum SignalingEvent {
  OFFER_FETCHED = "offerFetched",
}

export enum SignalingState {
  IDLE,
  OFFER_SENT,
  WAITING_FOR_ANSWER,
  GATHERING,
  ANSWER_SENT,
}
