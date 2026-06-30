import api from './api';

export const reviewCode=(payload)=>api.post('/reviews',payload);
