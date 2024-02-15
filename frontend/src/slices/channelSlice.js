import { createSlice } from "@reduxjs/toolkit";

const channelLoading = Array(4).fill({ isLoading: true });
const channelSlice = createSlice({
  name: 'channel',
  initialState: {
    loading: false,
    adminChannel: null,
    loadingChannels: false,
    loadingCreate: false,
    loadingAcceptInvite: false,
    channels: channelLoading,
  },
  reducers: {
    channelsRequest(state, action) {
      return {
        ...state,
        loading: true
      }
    },
    channelsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        adminChannel: action.payload.channel,
      }
    },
    channelsFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    },
    channelsListRequest(state, action) {
      return {
        ...state,
        loadingChannels: true,
        channels: channelLoading
      }
    },
    channelsListSuccess(state, action) {
      return {
        ...state,
        loadingChannels: false,
        channels: action.payload.channels,
        selectedChannel: action.payload.channels[0]
      }
    },
    channelsListFail(state, action) {
      return {
        ...state,
        loadingChannels: false,
        channelsError: action.payload
      }
    },
    channelsCreateRequest(state, action) {
      return {
        ...state,
        loadingCreate: true,
      }
    },
    channelsCreateSuccess(state, action) {
      return {
        ...state,
        loadingCreate: false,
      }
    },
    channelsCreateFail(state, action) {
      return {
        ...state,
        loadingCreate: false,
      }
    },
    setSelectedChannel(state, action) {
      return {
        ...state,
        selectedChannel: action.payload
      }
    },
    loadAcceptInvite(state, action) {
      return {
        ...state,
        loadingAcceptInvite: true,
      }
    },
    setAcceptInvite(state, action) {
      return {
        ...state,
        loadingAcceptInvite: false,
        channels: state.channels.map(c => c._id === action.payload._id ? {...c, status: 'active' } : c )
      }
    },
    updateChannelLastMessage(state, action) {
      return {
        ...state,
        loadingAcceptInvite: false,
        channels: state.channels.map(c => c._id === action.payload.channel ? {...c, latestMessage: action.payload } : c )
      }
    },
    errorAcceptInvite(state, action) {
      return {
        ...state,
        loadingAcceptInvite: false,
      }
    }
  }
});

const { actions, reducer } = channelSlice;

export const {
  channelsRequest,
  channelsSuccess,
  channelsFail,
  channelsListRequest,
  channelsListSuccess,
  channelsListFail,
  channelsCreateRequest,
  channelsCreateSuccess,
  channelsCreateFail,
  setSelectedChannel,
  loadAcceptInvite,
  setAcceptInvite,
  errorAcceptInvite,
  updateChannelLastMessage,
} = actions;

export default reducer;

