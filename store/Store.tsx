import create from 'zustand';

const useStore = create((set) => ({
    mobile : "",
    otpsent : false,
    otp: "",
    setmobile : (value: string) => set({mobile : value}),
    setotpsent: (value: boolean) => set({otpsent: value}),
    setotp : (value: string) => set({otp : value}),
}))

export default useStore;