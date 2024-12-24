import { router } from '@inertiajs/vue3';
import { useToast } from 'vue-toastification';
import { usePage } from '@inertiajs/vue3';


const page = usePage();
const toast = useToast();


export const notifications = () => {
  router.on('finish', () => {
    const message = page.props.message;
    
    if (message.body) {
      toast(message.body, {
          type: message.type,
      });
    }
  });
};