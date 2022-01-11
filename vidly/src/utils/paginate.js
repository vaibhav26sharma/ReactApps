import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //Converting array to lodash wrapper
  //Slice array from startIndex
  //Take items from array equal to pageSize in number
  //.value() returns those items
  return _(items).slice(startIndex).take(pageSize).value();
}
