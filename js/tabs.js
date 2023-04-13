export default function tabs() {
  const tabs = document.querySelectorAll('.tab');
  const tabs_content = document.querySelectorAll('.content');

  const openTab = (event, id) => {
    tabs.forEach(item => {
      if(item.classList.contains('active_tab')) {
        item.classList.remove('active_tab');
      }
    });
    tabs_content.forEach(item => {
      if(item.classList.contains('active_content')) {
        item.classList.remove('active_content');
      }
      if(item.id == `${id}_cont`) {
        item.classList.add('active_content');
      }
    });
    event.classList.add('active_tab');
  }

  tabs.forEach(item => item.addEventListener('click', e => {
    openTab(e.target, e.target.id);
  }));
}