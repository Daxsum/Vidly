import _ from 'lodash';
export function paginate(items,pageNumber,pageSize){
const StartIndex=(pageNumber-1)*pageSize;
return _(items).slice(StartIndex).take(pageSize).value()
}