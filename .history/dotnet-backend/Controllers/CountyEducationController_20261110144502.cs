    // 1. Get CDE Profile (Just the County data from CountyEducation table)
    public async Task<CountyEducation> GetCdeProfileAsync(int userId, CancellationToken ct)
    {
        var cdeMapping = await _context.CountyEducations
            .FirstOrDefaultAsync(c => c.userId == userId && c.isActive, ct);

        if (cdeMapping == null) 
            throw new Exception("CDE profile not found for this user.");

        return cdeMapping;
    }

    // 2. Get Schools by County
    public async Task<object> GetSchoolsByCountyAsync(string county, string? status, CancellationToken ct)
    {
        var query = _context.BasicEducations.Where(s => s.county == county);

        if (!string.IsNullOrEmpty(status) && status != "All")
        {
            query = query.Where(s => s.status == status.ToLower());
        }

        var schools = await query.ToListAsync(ct);

        return new
        {
            county = county,
            schools = schools.Select(s => new
            {
                s.institutionId,
                s.institutionName,
                s.status,
                s.subCounty,
                s.totalLearners,
                s.createdAt,
                s.certificateNumber
            }).ToList()
        };
    }