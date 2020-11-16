export class TreeService {
    
    list_to_tree(list) {
        let map = {}, node, roots = [], i;
        
        for (i = 0; i < list.length; i += 1) {
          map[list[i].id] = i; // initialize the map
          list[i].children = []; // initialize the children
        }
        for (i = 0; i < list.length; i += 1) {
          node = list[i];
          
          if (node.parent_Id != 0) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parent_Id]].children.push(node);
          } else {
            roots.push(node);
          }
        }
        return roots;
      }


      last_level_of_tree(list) {
        let roots = [], i;

        for (i = 0; i < list.length; i += 1) {
          
          if (list[i].children == 0) {
            roots.push(list[i]);
          }
        }        
        return roots;
      }
} 