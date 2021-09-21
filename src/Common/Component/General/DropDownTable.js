// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useRef } from 'react';
// import {
//   Icon, Grid, Table, Button
// } from 'semantic-ui-react';
// import _ from 'lodash';
// import PropTypes from 'prop-types';

// function DropdownTableCtrl(props) {
//   console.log(`DropdownTableCtrl ${props.id}`);
//   const node = useRef();

//   const [isListOpen, setIsListOpen] = React.useState(false);
//   const [headerTitle, setHeaderTitle] = React.useState('');
//   const [selectedItem, setSelectedItem] = React.useState(null);
//   const [keyword, setKeyword] = React.useState('');
//   const [list, setList] = React.useState([]);
//   const searchField = React.useRef();

//   const handleClick = e => {
//     if (node.current.contains(e.target)) {
//       // inside click
//       return;
//     }
//     // outside click
//     setIsListOpen(false);
//   };

//   useEffect(() => {
//     setList(props.options);
    
//     const { value, optionsMapping, options } = props;
//     if (value) {
//       if (!options || options.length === 0) setSelectedItem(null);
//       else {
//         var keyField = optionsMapping.key;
//         var item = _.find(options, (opt) => {
//           if (opt[keyField] === value) return true;
//         });

//         if (item) {
//           selectItem(item);
//         } else {
//           setSelectedItem(null);
//         }
//       }
//     }

//   }, [props.options]);

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClick);

//     return () => {
//       document.removeEventListener("mousedown", handleClick);
//     };
//   }, []);

//   const clearSelection = () => {
//     const { id, handleOnChange } = props;

//     setSelectedItem(null);
//     setHeaderTitle('');

//     handleOnChange(null, id);
//   }

//   const toggleList = () => {
//     setIsListOpen(!isListOpen);
//     setKeyword('');

//     if (isListOpen && searchField.current) {
//       searchField.current.focus();
//       setKeyword('');
//     }
//   }

//   const filterList = (e) => {
//     const { onSearchChange } = props;

//     if (typeof onSearchChange === 'function') onSearchChange(e, { searchQuery: e.target.value.toLowerCase() });
//     else setKeyword(e.target.value.toLowerCase());
//   }

//   const selectItem = (item) => {
//     const { handleOnChange, optionsMapping } = props;

//     let titleField = optionsMapping.title;
//     let keyField = optionsMapping.key;
//     let foundItem;

//     if (!item[titleField]) {
//       foundItem = list.find((i) => i.value === item.value);
//     }

//     setHeaderTitle(item[titleField] || foundItem.label);
//     setIsListOpen(false);
//     setSelectedItem(item);

//     (() => selectedItem?.value !== item[keyField] && handleOnChange(this, { value: item[keyField] }))();
//   }

//   const listItems = () => {
//     const { id, searchable, optionsMapping } = props;

//     let tempList = [...list];
//     let titleField = optionsMapping.title;
//     let keyField = optionsMapping.key;
//     const selectedItemValue = selectedItem?.[keyField];

//     if (keyword.length) {
//       tempList = list
//         .filter((item) => (
//           item[titleField].toLowerCase().slice(0, keyword.length).includes(keyword)
//         )).sort((a, b) => {
//           if (a[titleField] < b[titleField]) { return -1; }
//           if (a[titleField] > b[titleField]) { return 1; }
//           return 0;
//         });
//     }

//     if (tempList.length) {
//       return (
//         <Table singleLine selectable>
//           <Table.Header>
//             <Table.Row key='head'>
//               {selectedItem && <Table.HeaderCell></Table.HeaderCell>}
//               {
//                 _.map(optionsMapping.setup, (config) => (
//                   <Table.HeaderCell key={`head${config.Header}`} style={{height: '11px'}}>{config.Header}</Table.HeaderCell>
//                 ))
//               }
//             </Table.Row>
//           </Table.Header>
//           <Table.Body>
//             {tempList.map((item) => (
//               <Table.Row key={item[keyField]} onClick={() => selectItem(item)} className='dd-table'>
//                 {selectedItem && <Table.Cell>{item[keyField] === selectedItemValue ? <Icon name='check' /> : ''}</Table.Cell>}
//                 {
//                   _.map(optionsMapping.setup, (setup) => (
//                     <Table.Cell key={`${setup.Data}${item[keyField]}`}>{item[setup.Data]}</Table.Cell>
//                   ))
//                 }
//               </Table.Row>
//             ))}
//           </Table.Body>
//         </Table>
//       );
//     }

//     return (
//       <div
//         className={`dd-list-item no-result ${id}`}
//       >
//         {searchable[1]}
//       </div>
//     );
//   };

//   return (
//    <div class="field">
//       <label>{props.placeholder}:</label>
//       <div  ref={node} className={`dd-wrapper ${props.id}`} >
//         <Button type='button' className={`dd-header ${props.required ? 'required' : ''} ${props.id} buttonll `} onClick={selectedItem ? clearSelection : toggleList} disabled={props.disabled}>
//           <div className={`dd-header-title ${headerTitle ? 'selected' : 'unselected' } ${props.id}`}>{headerTitle ? headerTitle : props.placeholder}</div>
//           {selectedItem 
//             ? <Icon name='close' />
//             : isListOpen 
//               ? <Icon name='dropdown' />
//               : <Icon name='dropdown' />
//           }
//         </Button>
//         {isListOpen && (
//           <div
//             className={`dd-list${props.searchable ? ' searchable' : ''} ${props.id}`}
//           >
//             {props.searchable
//             && (
//               <>
//                 <input
//                   ref={searchField}
//                   className={`dd-list-search-bar ${props.id}`}
//                   placeholder={props.searchable[0]}
//                   onClick={(e) => e.stopPropagation()}
//                   onChange={(e) => filterList(e)}
//                 />
//               </>
//             )}
//             <div
//               className={`dd-scroll-list ${props.id}`}
//             >
//               <Grid columns='equal'>
//                 {listItems()}
//               </Grid>
//             </div>
//           </div>
//         )}        
//       </div>
//   </div>
//   )
// }

// DropdownTableCtrl.defaultProps = {
//   id: '',
//   value: undefined,
//   searchable: undefined
// };

// DropdownTableCtrl.propTypes = {
//   id: PropTypes.string,
//   placeholder: PropTypes.string.isRequired,
//   options: PropTypes.array,
//   handleOnChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
//   onSearchChange: PropTypes.func,
//   required: PropTypes.bool.isRequired,
//   disabled: PropTypes.bool.isRequired,
//   // searchable: PropTypes.shape([PropTypes.string, PropTypes.string]),
//   optionsMapping: PropTypes.shape({ key: PropTypes.string.isRequired, title: PropTypes.string.isRequired, setup: PropTypes.array.isRequired }).isRequired
// };


// function areEqual(prevProps, nextProps) {
//   if (prevProps.value !== nextProps.value) return false;
//   if (prevProps.options.length !== nextProps.options.length) return false;
//   return true;
// }

// export default React.memo(DropdownTableCtrl, areEqual);

