import Swal from 'sweetalert2'
import { Injectable } from '@angular/core'


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,

  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
const dialog = Swal.mixin({
  title: 'Are you sure?',
  // text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  customClass: {
    confirmButton: 'btn btn-info',
    cancelButton: 'btn btn-rose'
  },
  buttonsStyling: false,
  // confirmButtonText: 'Yes, delete it!'
})
@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  success(title: string, message?: string) {
    return Toast.fire({
      icon: 'success',
      title: title,
      text: message
    })
  }
  error(title: string, message?: string) {
    return Toast.fire({
      icon: 'error',
      title: title,
      text: message
    })
  }
  info(title: string, message?: string) {
    return Toast.fire({
      icon: 'info',
      title: title,
      text: message
    })
  }
  warning(title: string, message?: string) {
    return Toast.fire({
      icon: 'warning',
      title: title,
      text: message
    })
  }
  confirm(action: string) {
    return dialog.fire({
      title: `Are you sure you want to ${action}?`,
      // text: "You won't be able to revert this!",
      confirmButtonText: `Yes, ${action}!`
    })
  }
}
