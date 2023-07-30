alter table books
    add constraint min_point_books
        check (point>0);

