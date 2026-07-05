import Pocketbase from 'pocketbase';

export const pb = new Pocketbase(process.env.NEXT_PUBLIC_POCKETBASE_URL || 'https://backend.zesify.my.id/')

export function isAuthenticated(){
    return pb.authStore.isValid
}

export function getCurrentUser(){
    return pb.authStore.record
}

export function logout(){
    pb.authStore.clear()
    if(typeof window != 'undefined'){
        document.cookie =  'pb_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    }
}